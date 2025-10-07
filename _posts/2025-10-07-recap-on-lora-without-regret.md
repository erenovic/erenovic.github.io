---
title: 'Recap: LoRA Without Regret'
excerpt:
  'My take-aways from the blog post on [LoRA without
  Regret](https://thinkingmachines.ai/blog/lora/).'
featured_home: false
featured_demo_url:
---

Large language models keep getting bigger, yet most of the time we only need to
specialize them to a narrow task: a compliance assistant, a creative writing
sidekick, or a research helper in a post-training stage. Full finetuning every
weight in a 7B or 70B parameter model is expensive and awkward to deploy, which
is why Low Rank Adaptation (LoRA) has become such a popular alternative. LoRA
proposes a simple idea: instead of touching the full weight matrices in the base
model, learn a pair of tiny matrices whose product approximates the change we
want. The base weights stay frozen, the adapters are small enough to ship around
in megabytes, and we get most of the accuracy of a full-blown finetune.

This post is my distilled set of notes from Thinking Machines’ _LoRA without
Regret_ write-up. Their experiments dig into when LoRA behaves like full
finetuning, where it breaks, and why it may be the default choice for many
post-training pipelines.

## LoRA in a Nutshell

<figure class="figure-centered">
  <img src="/assets/blogs/recap-on-lora/lora_toy.svg"
       alt="Placeholder for LoRA adapter visualization"
       title="Schematic visualization of LoRA adapters spanning a low-rank subspace of the weight matrix via matrix A and B."
       style="width:80%;">
  <figcaption><em>Schematic visualization of LoRA adapters spanning a low-rank subspace of the weight matrix via matrix A and B.</em></figcaption>
</figure>

LoRA inserts low-rank adapter matrices `A` and `B` alongside the original model
weights. Because their rank is tiny, we only introduce a small number of new
parameters (often around $1\%$ of the number of base model parameters). During
training we backpropagate through the frozen base model but only update the
adapter weights, effectively capturing task-specific information in a
low-dimensional subspace.

When the base weight matrix $W \in \mathbb{R}^{d \times k}$ is frozen, LoRA
learns a low-rank update $\Delta W$ expressed as:

$$
W' = W + \Delta W, \qquad \Delta W = B A,
$$

with $B \in \mathbb{R}^{d \times r}$ and $A \in \mathbb{R}^{r \times k}$ where
$r \ll \min(d, k)$. This keeps the additional parameters to $r\times(d + k)$
rather than $dk$. At inference time, the forward pass simply augments the frozen
projection:

$$
y = W x + B (A x),
$$

so we recover the adapted output without ever modifying the original weights.

## Why Should We Care About LoRA?

1. **Multi-tenant serving**: Load the base model once and hot-swap lightweight
   adapters to serve domain-specific variants—medical, legal, creative, and
   more.
2. **Lower training overhead**: Because gradients and optimizer state only cover
   the adapters, the hardware and memory requirements drop dramatically compared
   with full finetuning.
3. **Operational simplicity**: Adapter checkpoints weigh only a few megabytes,
   which makes versioning, sharing, and rolling back far easier than dealing
   with full model shards.
4. **Training complexity (simplicity)**: Backpropagating through the full model
   is typically the priciest part of training. LoRA saves compute because we
   only calculate gradients for the tiny `A` and `B` matrices. LoRA leads to
   roughly a 30% reduction in FLOPs per training step when you account for both
   forward and backward passes.

## Can LoRA Match Full Finetuning?

A central theme in the post is “low regret” finetuning—scenarios where LoRA
achieves the same downstream performance as updating every parameter. The
results split into two regimes:

- **Data-rich finetuning**: When you have massive datasets, LoRA can run out of
  capacity. The low rank update simply cannot encode the richer signal you get
  from truly large-scale finetunes.
- **Typical post-training**: For instruction tuning, domain adaptation, and
  similar medium-sized datasets, LoRA keeps pace with full finetuning. As long
  as the adapters are applied broadly across the network (not just attention
  blocks), the gap largely disappears.

## Training Lessons from the Paper

- **Target all major weight matrices**: LoRA adapters must cover MLP and MoE
  layers in addition to attention. Early work focused on attention weights and
  left a lot of performance on the table; most of the model’s information lives
  in those feed-forward blocks.
- **Batch size sensitivity**: Full finetuning tolerates larger batch sizes. LoRA
  tends to degrade faster as you scale batches, so smaller batches are safer if
  you want stable convergence.
- **Learning rate adjustments**: Optimal learning rates ended up around
  $10\times$ higher than the corresponding full finetunes. Because LoRA
  initializes the `B` matrix to zero, the initial gradients are small, and a
  larger learning rate kickstarts progress across tasks.

## Reinforcement Learning is Different

The RL experiments were more positive than the supervised learning experiments.
With policy gradient methods, the LoRA adapters matched full finetuning
perfectly even with very low ranks (as low as `r=1`). The authors credit this to
the low information density of RL feedback as the training signal is coming from
a single episodic reward which is sparser when compared with richly supervised
datasets. If the total bits of feedback you can extract are small, then a small
adapter has more than enough capacity to memorize the needed adjustments.

## Bottom Line

- LoRA delivers near-full-finetuning quality on mainstream post-training tasks
  while slashing memory and compute costs.
- Cover every major weight matrix—especially MLP and MoE layers—and nudge the
  learning rate up by about an order of magnitude relative to full finetuning.
- Expect it to be the default choice for instruction tuning, domain
  specialization, and even RL setups where the signal is sparse.

## Citation

- Thinking Machines. “LoRA without Regret.” 2024.
  [https://thinkingmachines.ai/blog/lora/](https://thinkingmachines.ai/blog/lora/)
