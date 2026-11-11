---
permalink: /
lang: en
title: "Xiaoyu Xu (许潇予) - Academic Homepage"
excerpt: "Xiaoyu Xu (许潇予), incoming doctoral student at Fudan University in 2027."
description: "Xiaoyu Xu (许潇予) will join FudanNLP at Fudan University's College of Computer Science and Artificial Intelligence as a doctoral student in 2027. Research on efficient and trustworthy AI, focusing on large language models and multimodal large language models."
author_profile: true
profile_name: "Xiaoyu Xu"
profile_name_alt: "许潇予"
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I will join [FudanNLP](https://nlp.fudan.edu.cn/) at Fudan University’s College of Computer Science and Artificial Intelligence as a Ph.D. student in 2027.

My research focuses on **efficient and trustworthy AI**, particularly **large language models (LLMs)** and **multimodal large language models (MLLMs)**. I aim to understand how models use information and computation, and turn these insights into more efficient and reliable learning, reasoning, and action. Specifically, I am interested in:

1. **Interpretability:** feature attribution and mechanistic interpretability, to understand how models represent information and use it to make decisions.
2. **Interpretability-guided architecture design and multimodal representation learning** for efficient and trustworthy training and inference.
3. **Trustworthy AI agents:** reliable reasoning, decision-making, and learning through interaction with their environments.

<p class="contact-note">Feel free to <a href="mailto:{{ site.author.email }}">email me</a> about research, potential collaborations, or any ideas you'd like to share.</p>

*海到无边天作岸，山登绝顶我为峰。*

## News

<ul class="news-list">
  <li><time datetime="2026-10">2026.10</time><span>New preprint: <a href="https://arxiv.org/abs/2610.17663">The Image Still Has a Say</a>.</span></li>
  <li><time datetime="2026-04">2026.04</time><span>My first-author paper was accepted to the <a href="https://aclanthology.org/2026.acl-long.1212/">ACL 2026 main conference</a>.</span></li>
  <li><time datetime="2026-01">2026.01</time><span>My first-author paper was accepted by <a href="https://ieeexplore.ieee.org/document/11358388">IEEE Transactions on Consumer Electronics</a>.</span></li>
  <li><time datetime="2025-10">2025.10</time><span>Received the <strong>National Scholarship</strong> (4 recipients among 1,200 students).</span></li>
</ul>

## Publications

{% include publications.html %}

## Education

<div class="cv-list">
  <div class="cv-entry cv-entry--marked">
    <img class="institution-mark" src="{{ '/images/institutions/fudan.ico' | relative_url }}" alt="" width="32" height="32" loading="lazy">
    <div class="cv-heading"><h3>Fudan University</h3><span class="cv-date">2027 (expected)</span></div>
    <p>Doctoral studies · <a href="https://nlp.fudan.edu.cn/">FudanNLP</a><br><span class="cv-detail">College of Computer Science and Artificial Intelligence</span></p>
  </div>
  <div class="cv-entry cv-entry--marked">
    <img class="institution-mark" src="{{ '/images/institutions/fuzhou.png' | relative_url }}" alt="" width="32" height="32" loading="lazy">
    <div class="cv-heading"><h3>Fuzhou University</h3><span class="cv-date">Aug 2023 – Jun 2027 (expected)</span></div>
    <p>Computer Science and Software Engineering (CSSE)<br><span class="cv-detail">Maynooth International Engineering College · Undergraduate</span></p>
    <p class="cv-stats">GPA: <strong>3.92/4.00</strong> <span aria-hidden="true">·</span> Rank: <strong>1/89</strong></p>
  </div>
</div>

## Experience

<div class="cv-list">
  <div class="cv-entry cv-entry--marked">
    <img class="institution-mark institution-mark--shlab" src="{{ '/images/institutions/shlab.ico' | relative_url }}" alt="" width="24" height="24" loading="lazy">
    <div class="cv-heading"><h3><a href="https://www.shlab.org.cn/">Shanghai AI Laboratory</a></h3><span class="cv-date">Jul – Oct 2025</span></div>
    <p>Research Intern · Trustworthy AI Center</p>
  </div>
</div>

## Personal Interests
{: #interests}

{% include personal-interests.html %}
