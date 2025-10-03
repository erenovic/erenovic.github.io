---
title: 'RL-based Cart-Pole controller with Policy Gradient methods'
excerpt:
  'Interactive CartPole playground for probing policy-gradient controllers, with
  live demo and full stack code on GitHub.'
collection: posts
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

## What to Look For

- Compare how different policies absorb repeated nudges and recover speed.
- Inspect failure cases (e.g. delayed impulses) to spot hyperparameter tweaks
  worth exploring.
- Use it as a quick sanity check before running longer sweeps on cloud hardware.
