---
title: 'Recap: World Models Evolution and JEPA'
excerpt:
  'Is the hype around world models grounded? What does JEPA suggest? My
  take-aways based on the blog post of [World Models Evolution: Beyond the Hype
  2025](https://knightnemo.github.io/blog/posts/wm_2025/#fn:11) and [Back to the
  Features: DINO as a Foundation for Video World
  Models](https://arxiv.org/pdf/2507.19468)'
featured_home: false
featured_demo_url:
---

The recent buzz around models like Google's Genie has thrust "world models" into
the spotlight, creating a wave of excitement. But what are they, and is the hype
justified? At their core, world models are an attempt to build systems that
learn the fundamental dynamics of our world—a sort of intuitive physics engine
learned from data. The goal is to move beyond language and images to truly
understanding how things move, interact, and evolve over time.

This is a monumental step, but the path is filled with massive hurdles that
temper expectations. Let's break down the landscape, from the core challenges to
the elegant architectural solutions that are paving the way forward.

# The Big Hurdles: Data and Action

Training effective world models is far more complex than training a language
model. The challenges aren't just about scale; they are fundamental to what
we're asking these models to do.

## The Scarcity of the _Right_ Data

While we are swimming in a sea of video data, world models need something very
specific: videos paired with actions. To truly learn cause and effect, a model
needs to know not just what happened next, but why. What action did an agent
take to cause the next frame? For a self-driving car, this could be the steering
angle and throttle; for a robot arm, the joint torques. Without this action
data, a model might become excellent at predicting the next frame of a passive
video, but it will struggle to be a reliable tool for an active agent that needs
to plan and control its movements.

## The _Heterogeneity_ of Action Spaces

A more profound challenge is the sheer diversity of "action spaces." For Large
Language Models (LLMs), the "action" is simple and unified: predicting the next
token. But for physical agents, actions are intrinsically tied to their bodies.
A drone's actions (rotor speeds) are entirely different from a humanoid robot's
(joint movements) or a car's (steering, acceleration). This makes creating a
single, universal world model that works across different agents a monumental
task. How can one model learn the physics relevant to both a flying drone and a
walking robot? This heterogeneity is a significant barrier to the dream of a
general-purpose world model.

## Two Paths to Building the World Models: Pixel- vs. Latent-Space

As researchers tackle these challenges, two main architectural philosophies have
emerged for how a model should represent and predict the future.

### The Pixel-space Approach

The most intuitive approach is to predict the future pixel by pixel. Given the
current frame and an action, the model generates the entire next video frame.
Early models took this path, aiming for high-fidelity, photorealistic
predictions of every detail.

However, this method is computationally ravenous. Why? Because most pixels in a
scene are irrelevant for understanding the core dynamics. Does a self-driving
car need to predict the exact motion of every leaf on a tree to know it should
stop at a red light? This obsession with pixel-level detail makes the models
incredibly expensive to train and slow to run, as the compute required scales
enormously with both spatial and temporal resolution.

### The Efficient Abstraction: Latent-space Models

This brings us to the second, more efficient approach: latent-space models. The
guiding principle here is simple: why predict every pixel when you can predict
an abstract summary of the future? This is the core idea behind the
Joint-Embedding Predictive Architecture
([JEPA](https://arxiv.org/abs/2301.08243)) championed by Meta AI.

Instead of operating on raw pixels, a JEPA model first learns a compressed,
abstract representation—or "embedding"—of the world. It then performs all its
predictions within this highly efficient latent space. The goal is not to
reconstruct the exact image but to predict the future representation. This
approach cleverly sidesteps the need to model unnecessary details like lighting,
textures, and background noise, focusing only on the semantic essence of the
scene.

### JEPA in Action: The [DINO-World Case Study](https://arxiv.org/pdf/2507.19468)

<figure class="figure-centered">
  <img src="/assets/blogs/recap-on-world-models/back-to-features-dino.png"
       alt="DINO-World schematic. It shows video frames being fed into a frozen DINOv2 encoder to get 'Past Features.' Then, the 'Predictor' module takes these features to generate 'Predicted Features,' which are compared to the future ground-truth DINOv2 features."
       title='The main architectural diagram for DINO-world. It shows video frames being fed into a frozen DINOv2 encoder to get "Past Features." Then, the "Predictor" module takes these features to generate "Predicted Features," which are compared to the future ground-truth DINOv2 features.'>
  <figcaption>The main architectural diagram for DINO-world. It shows video frames being fed into a frozen DINOv2 encoder to get "Past Features." Then, the "Predictor" module takes these features to generate "Predicted Features," which are compared to the future ground-truth DINOv2 features.</figcaption>
</figure>

The DINO-world model is a fantastic demonstration of the power of latent-space
prediction and highlights a brilliant strategy: **decoupling**. The authors
asked: why force one giant model to learn both visual understanding _and_
physical dynamics simultaneously?

Instead, they took a two-step approach:

1. **Leverage a Pre-trained Vision Expert**: They start with the frozen visual
   features from DINOv2, a powerful model already trained to understand the
   visual world. DINOv2 provides a rich, compressed representation that already
   captures concepts like objects, depth, and scene layout.

2. **Train a Dynamics Predictor**: They then train a separate, smaller predictor
   model that operates exclusively on these abstract DINOv2 features. Its job is
   not to predict pixels, but to predict what the DINOv2 features of the next
   frame will look like.

This decoupling provides a massive boost in efficiency. While a pixel-space
model like COSMOS can require 4 to 12 billion parameters, the DINO-world
predictor achieves strong results with just over 1 billion.

Critically, this approach works remarkably well. DINO-world demonstrates a solid
grasp of intuitive physics and excels at downstream tasks like predicting future
object segmentation masks and depth maps—all while operating in its efficient,
abstract latent space. This validates the core idea that a compressed
representation is sufficient for learning the essential dynamics of the world.
Rest of the research seems to be converging: 1) Take a strong video model
architecture, 2) Plug-in action conditioning modules, 3) Often use something
like Diffusion Forcing to refine the predictions but the core engine remains to
operate in this very efficient latent space.

<figure class="figure-centered">
  <img src="/assets/blogs/recap-on-world-models/back-to-features-results.png"
       alt="DINO-World autoregressive rollout results. This figure shows two examples of autoregressive rollouts. The top row is the real video, the middle row is the visualization of the *ground-truth* DINOv2 features, and the bottom row shows DINO-world's predicted features over time."
       title="DINO-World autoregressive rollout results. This figure shows two examples of autoregressive rollouts. The top row is the real video, the middle row is the visualization of the *ground-truth* DINOv2 features, and the bottom row shows DINO-world's predicted features over time.">
  <figcaption>DINO-World autoregressive rollout results. This figure shows two examples of autoregressive rollouts. The top row is the real video, the middle row is the visualization of the *ground-truth* DINOv2 features, and the bottom row shows DINO-world's predicted features over time. It shows that the predicted latent features closely track the real ones, correctly anticipating the movement of the taxi and the parabolic motion of the objects. It makes the abstract idea of "predicting features" tangible and proves its effectiveness. The visualization of features via PCA makes them easy to interpret visually.</figcaption>
</figure>

<figure class="figure-centered">
  <img src="/assets/blogs/recap-on-world-models/back-to-features-cross-attn-qualitative.png"
       alt="This figure visualizes the cross-attention maps inside the predictor. For a specific query patch in the future (marked in red), it shows which patches from the past frames the model is *paying attention to*."
       title="A peek inside DINO-world's 'brain'. To predict a future patch (red dot), the model's attention (bright areas) focuses on the object's previous locations, showing how it tracks motion over time to understand physical dynamics.">
  <figcaption>A peek inside DINO-world's 'brain'. To predict a future patch (red dot), the model's attention (bright areas) focuses on the object's previous locations, showing how it tracks motion over time to understand physical dynamic.s</figcaption>
</figure>

# Bottom Line: The Future of World Models

The takeaway is clear: the frontier of world models is rapidly shifting. We are
moving away from brute-force, pixel-perfect predictions and toward the elegant
efficiency of latent-space models. This JEPA-inspired approach allows for
building more scalable and capable models that learn the essential dynamics of
our world. But what does this mean in practice, and what challenges remain?

## World Models as Flexible Simulators, Not a Replacement for Real Data

So, what is the actual impact for building smarter robots and AI agents? The
most immediate role for world models is as powerful, flexible simulators. Unlike
traditional simulators like MuJoCo or IsaacSim, which are based on hard-coded
physics equations, world models learn dynamics directly from real-world video
data. This allows them to capture complex, nuanced phenomena that are difficult
to model mathematically.

However, they are not a silver bullet that will eliminate the need for
real-world data. For high-precision, safety-critical tasks, traditional
physics-based simulators remain more reliable. World models are not perfect, and
their predictions can degrade over longer time horizons. The future likely
involves a hybrid approach, where agents train on a mix of real-world
demonstrations, traditional simulation, and imagined scenarios from a world
model [3](https://arxiv.org/pdf/2507.19468).

## Supporting the Next Generation of AI Agents

Perhaps the most exciting role for world models is not as the policy engine
itself, but as a critical advisor to one. Think of a generalist agent model
(like a VLA) that needs to decide what to do next. Instead of acting blindly, it
can use a world model as a short-term "consequence simulator." The agent can
"imagine" the outcome of a few different actions in the world model's latent
space and choose the one that leads to the most desirable future. In this
vision, the world model isn't the decision-maker; it's the high-speed
imagination that enables better, safer decisions.

### The Road Ahead: Big Unsolved Problems

Despite the rapid progress, several major challenges stand between us and truly
general-purpose world models:

1. **Long-Term Consistency**: While current models can generate consistent short
   video clips, their predictions tend to drift and lose coherence over longer
   sequences. Solving this will likely require new architectures, such as
   state-space models or retrieval-augmented methods, to maintain a coherent
   history.

2. **Integrating Abstract Reasoning**: World models are learning the intuitive
   "how" of the physical world. However, the abstract "what" and "why"—common
   sense reasoning—is still the domain of LLMs. A deeper fusion of these two
   capabilities is needed for models to truly understand and plan complex tasks.

3. **Real-Time Performance**: For a world model to be useful for an interactive
   agent, it needs to run in real-time. This remains a significant engineering
   hurdle, especially for large models that need to run on edge devices like
   robots.

4. **Multi-Agent Dynamics**: The real world is inherently multi-agent. Modeling
   the complex interactions, intentions, and social dynamics between multiple
   independent agents is a massive open problem that single-agent models do not
   address.

## Citation

1. [Assran, M., Duval, Q., Misra, I., Bojanowski, P., Vincent, P., Rabbat, M., ... & Ballas, N. (2023). Self-supervised learning from images with a joint-embedding predictive architecture](https://arxiv.org/abs/2301.08243)
2. [Huang, Siqiao. "Beyond the Hype: How I See World Models Evolving in 2025". Nemo's Blog (Oct 2025)](https://knightnemo.github.io/blog/posts/wm_2025/).
3. [Baldassarre, F., Szafraniec, M., Terver, B., Khalidov, V., Massa, F., LeCun, Y., ... & Bojanowski, P. (2025). Back to the features: Dino as a foundation for video world models](https://arxiv.org/pdf/2507.19468)
