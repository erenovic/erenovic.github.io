---
permalink: /
title: 'Who am I?'
excerpt: 'About me'
sitemap: true
author_profile: true
redirect_from:
  - about/
  - about.html
---

Hello! I’m **Eren Çetin**, a Master’s student at **ETH Zürich** specializing in
**signal processing**, **machine learning**, and **computer vision**. Currently,
I am conducting my **Master’s thesis at Disney Research Studios**, focusing on
**generative video compression** using **video diffusion models** and **implicit
neural representations (INRs)**.

My research broadly lies at the intersection of **3D vision**, **neural
rendering**, and **generative models**, aiming to build scalable and efficient
3D and video representation systems. I previously worked on **generalizable 3D
reconstruction from sparse views** and **compression of 3D Gaussian splatting
representations**.

I completed my **Bachelor’s degrees in Electrical & Electronics Engineering and
Economics** at **Koç University**, graduating as salutatorian. My professional
interests include `3D vision`, `3D reconstruction`, `neural rendering`,
`video compression`, and `deep generative modeling`.

I primarily work with `Python`, `PyTorch`, `CUDA`, `C/C++`, and `TypeScript`,
and enjoy bridging theory with large-scale implementations and visualization.

## ✨ Featured

{% assign featured_post = site.posts | where: "title", "RL-based Cart-Pole controller with Policy Gradient methods" | first %}
{% if featured_post %}

<div class="featured-project" style="margin: 2rem 0; padding: 1.5rem; border: 1px solid #e0e0e0; border-radius: 12px; background: #fafafa;">
  <h3 style="margin-top: 0;">
    <a href="{{ featured_post.url | relative_url }}" style="text-decoration: none; color: inherit;">
      {{ featured_post.title }}
    </a>
  </h3>
  <p style="margin-bottom: 1.5rem; font-size: 0.95rem; line-height: 1.6;">
    {{ featured_post.excerpt | strip_html }}
  </p>
  <div class="featured-demo" style="margin-bottom: 1rem;">
    <iframe
      src="{{ '/assets/demos/rl-cartpole/index.html' | relative_url }}"
      width="100%"
      height="400"
      style="border: 1px solid #ccc; border-radius: 8px;"
      loading="lazy"
      frameborder="0">
      Your browser does not support iframes.
      <a href="{{ '/assets/demos/rl-cartpole/index.html' | relative_url }}" target="_blank">Open demo in new window</a>
    </iframe>
  </div>
  <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
    <a href="{{ featured_post.url | relative_url }}" style="display: inline-block; padding: 0.6rem 1.2rem; background-color: #007cba; color: #fff; border-radius: 6px; text-decoration: none; font-weight: 600;">Read the project write-up</a>
    <a href="{{ '/assets/demos/rl-cartpole/index.html' | relative_url }}" target="_blank" style="display: inline-block; padding: 0.6rem 1.2rem; border: 1px solid #007cba; color: #007cba; border-radius: 6px; text-decoration: none; font-weight: 600;">Launch full-screen demo</a>
  </div>
</div>
{% endif %}

<!--
Create content & metadata
------
For site content, there is one markdown file for each type of content, which are stored in directories like _publications, _talks, _posts, _teaching, or _pages. For example, each talk is a markdown file in the [_talks directory](https://github.com/academicpages/academicpages.github.io/tree/master/_talks). At the top of each markdown file is structured data in YAML about the talk, which the theme will parse to do lots of cool stuff. The same structured data about a talk is used to generate the list of talks on the [Talks page](https://academicpages.github.io/talks), each [individual page](https://academicpages.github.io/talks/2012-03-01-talk-1) for specific talks, the talks section for the [CV page](https://academicpages.github.io/cv), and the [map of places you've given a talk](https://academicpages.github.io/talkmap.html) (if you run this [python file](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.py) or [Jupyter notebook](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb), which creates the HTML for the map based on the contents of the _talks directory).

**Markdown generator**

I have also created [a set of Jupyter notebooks](https://github.com/academicpages/academicpages.github.io/tree/master/markdown_generator
) that converts a CSV containing structured data about talks or presentations into individual markdown files that will be properly formatted for the academicpages template. The sample CSVs in that directory are the ones I used to create my own personal website at stuartgeiger.com. My usual workflow is that I keep a spreadsheet of my publications and talks, then run the code in these notebooks to generate the markdown files, then commit and push them to the GitHub repository.
-->
