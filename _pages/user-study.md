---
layout: single
title: "Video Compression User Study"
permalink: /user-study/
author_profile: true
---

The study below compares our compression method against several baselines. It streams directly from the computing cluster and is only reachable while the Slurm job is running.

{% if site.user_study_url %}
<div class="notice--info">
  <p><strong>Tip:</strong> If the embedded view does not load or you prefer a larger window, <a href="{{ site.user_study_url }}" target="_blank" rel="noopener">open the study in a new tab</a>.</p>
</div>

<iframe
  src="{{ site.user_study_url }}"
  style="width: 100%; min-height: 70vh; border: 1px solid #ccc; border-radius: 6px;"
  allow="fullscreen; autoplay"
  loading="lazy"
></iframe>
{% else %}
<div class="notice--warning">
  <p>The study is currently offline. Once the proxy is live, set <code>user_study_url</code> in <code>_config.yml</code> to the public URL and redeploy the website.</p>
</div>
{% endif %}

<h2 id="how-to-participate">How to Participate</h2>

<ol>
  <li>Ensure the study job is running on the ETH Zürich Euler cluster and that <code>eth_proxy</code> is forwarding the port.</li>
  <li>Reload this page once you have a valid URL; the iframe above will display the voting interface.</li>
  <li>Complete the comparisons and submit your preferences for detail, motion, and overall quality.</li>
</ol>

<p>Please report any playback or access issues to <a href="mailto:ecetin@student.ethz.ch">ecetin@student.ethz.ch</a>.</p>
