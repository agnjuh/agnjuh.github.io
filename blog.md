---
layout: default
title: Blog
permalink: /blog/
---

<section>
  <h2>Blog</h2>

  <p>
    Notes on computational biology, spatial transcriptomics, tumour microenvironments,
    immune regulation, reproducible workflows, and biomedical research.
  </p>

  <ul>
    {% for post in site.posts %}
      <li>
        <a href="{{ post.url }}">{{ post.title }}</a>
        <br>
        <span class="post-date">{{ post.date | date: "%B %-d, %Y" }}</span>
      </li>
    {% endfor %}
  </ul>
</section>