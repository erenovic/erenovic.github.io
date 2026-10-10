---
title:
  'DiV-INR: Extreme Low-Bitrate Diffusion Video Compression with INR
  Conditioning'
collection: publications
permalink: /publication/2026-04-09-div-inr-arxiv
excerpt:
  'A perceptually-driven video compression framework that conditions pre-trained
  video diffusion models on implicit neural representations (INRs) for the
  extremely low bitrate regime (<0.05 bpp).'
date: 2026-04-09
venue: 'arXiv preprint'
paperurl: 'https://arxiv.org/abs/2604.08329'
citation:
---

We present a perceptually-driven video compression framework integrating
implicit neural representations (INRs) and pre-trained video diffusion models to
address the extremely low bitrate regime (<0.05 bpp). Our approach exploits the
complementary strengths of INRs, which provide a compact video representation,
and diffusion models, which offer rich generative priors learned from
large-scale datasets. The INR-based conditioning replaces traditional
intra-coded keyframes with bit-efficient neural representations trained to
estimate latent features and guide the diffusion process. Our joint optimization
of INR weights and parameter-efficient adapters for diffusion models allows the
model to learn reliable conditioning signals while encoding video-specific
information with minimal parameter overhead. Our experiments on UVG, MCL-JCV,
and JVET Class-B benchmarks demonstrate substantial improvements in perceptual
metrics (LPIPS, DISTS, and FID) at extremely low bitrates, including
improvements on BD-LPIPS up to 0.214 and BD-FID up to 91.14 relative to HEVC,
while also outperforming VVC and previous strong state-of-the-art neural and
INR-only video codecs. Moreover, our analysis shows that INR-conditioned
diffusion-based video compression first composes the scene layout and object
identities before refining textural accuracy, exposing the semantic-to-visual
hierarchy that enables perceptually faithful compression at extremely low
bitrates.

[Read the paper on arXiv](https://arxiv.org/abs/2604.08329)

Recommended citation:

{% raw %}
```
@misc{cetin2026divinr,
  title = {DiV-INR: Extreme Low-Bitrate Diffusion Video Compression with INR Conditioning},
  author = {{\c{C}}etin, Eren and Relic, Lucas and Xue, Yuanyi and Gross, Markus and Schroers, Christopher and Azevedo, Roberto},
  year = {2026},
  eprint = {2604.08329},
  archivePrefix = {arXiv},
  primaryClass = {eess.IV},
  url = {https://arxiv.org/abs/2604.08329}
}
```
{% endraw %}
