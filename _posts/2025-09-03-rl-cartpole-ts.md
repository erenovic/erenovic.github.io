---
title: 'RL-based Cart-Pole controller with Policy Gradient methods'
excerpt:
  'Interactive CartPole playground for probing policy-gradient controllers, with
  live demo and full stack code on GitHub.'
featured_home: true
featured_demo_url: /assets/demos/rl-cartpole/index.html
---

A browser-native reinforcement learning playground that lets you see CartPole
policies balance in real time, nudge them off centre, and watch how the control
loop recovers. It pairs a lightweight simulator with a model export path so you
can iterate on new policies and drop them straight into the demo.

## Highlights

- Real-time CartPole visualisation that runs fully in the browser (no installs).
- Manual keyboard/touch nudges for quick robustness checks.
- Fast turnaround from training to deployment: export a policy, reload the demo,
  and compare behaviours side by side.
- Designed as a teaching aid for policy-gradient intuition and failure analysis.

## Try It Live

<div style="text-align: center; margin: 20px 0;">
  <iframe
    src="/assets/demos/rl-cartpole/index.html"
    width="100%"
    height="500px"
    style="border: 1px solid #ccc; border-radius: 8px;"
    frameborder="0">
    Your browser does not support iframes.
    <a href="/assets/demos/rl-cartpole/index.html" target="_blank">Open demo in new window</a>
  </iframe>
</div>

<div style="text-align: center; margin: 10px 0;">
  <a href="/assets/demos/rl-cartpole/index.html" target="_blank" style="display: inline-block; padding: 10px 20px; background-color: #007cba; color: white; text-decoration: none; border-radius: 5px;">🚀 Open Full Screen Demo</a>
</div>

## Explore the Project

The full source—frontend simulator, training environment, and ONNX export
utilities—is available on GitHub. The README walks through setup, training
recipes, and deployment tips.

- Code & documentation:
  [github.com/erenovic/balancing-bot](https://github.com/erenovic/balancing-bot)
- Issues and pull requests welcome if you build new policies or extend the
  training loop.

## 1. `REINFORCE` on CartPole

The policy shipped with the demo is trained using REINFORCE, the vanilla
Monte-Carlo policy-gradient method. The objective is to maximise expected return

$$
J(\theta) = \mathbb{E}_{\tau \sim \pi_\theta}\left[\sum_{t=0}^{T-1} \gamma^t r_t\right],
$$

where a trajectory $\tau$ is a sequence of states $s_t$, actions $a_t$, and
rewards $r_t$ collected by rolling out the policy $\pi_\theta(a \mid s)$ in the
environment. CartPole provides a reward of $+1$ for every timestep the pole
stays balanced, so maximising $J(\theta)$ corresponds to keeping the pole
upright as long as possible.

REINFORCE estimates the gradient of this objective with Monte-Carlo returns. For
each timestep $t$ in an episode we compute the discounted return

$$
G_t = \sum_{k=t}^{T-1} \gamma^{\,k-t} r_k,
$$

and accumulate the score-function gradient

$$
\nabla_\theta J(\theta) \approx \frac{1}{N} \sum_{i=1}^N \sum_{t=0}^{T_i-1} G_t^{(i)} \, \nabla_\theta \log \pi_\theta\!\bigl(a_t^{(i)} \mid s_t^{(i)}\bigr),
$$

where $N$ is the number of sampled episodes in a batch and $T_i$ the length of
episode $i$. We use $\gamma = 0.99$ to gently prioritise early stability without
ignoring late-episode mistakes.

To reduce gradient variance we subtract a baseline $b_t$ (an exponential moving
average of returns) before applying the update:

$$
\theta \leftarrow \theta + \alpha \, \sum_{t=0}^{T-1} \bigl(G_t - b_t\bigr) \, \nabla_\theta \log \pi_\theta(a_t \mid s_t),
$$

with learning rate $\alpha = 1\times10^{-3}$. In practice we fit a small
two-layer MLP policy that outputs the logits for the two CartPole actions
(`left`, `right`). Episodes terminate when the pole falls or a 500-step cap is
reached; stable policies regularly hit the cap.

### Training loop at a glance

1. Roll out $N$ CartPole episodes using the current policy.
2. Compute returns $G_t$ and baseline-corrected advantages $A_t = G_t - b_t$.
3. Accumulate $\nabla_\theta \log \pi_\theta(a_t \mid s_t)$ weighted by $A_t$.
4. Apply the gradient step and update the baseline estimate.
5. Repeat until the moving-average return surpasses the 500-step ceiling.

The resulting policy checkpoint is exported to ONNX and bundled with the demo.
You can swap in your own checkpoints to compare alternative reward shaping or
architecture tweaks side by side.
