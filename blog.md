---
layout: default
title: Blog
permalink: /blog/
---

<section>
  <h2>Blog</h2>

  <p><em>English</em></p>

  <p>
    Living systems are not simply collections of molecules, cells, or genes.
    They grow, adapt, repair, and organise themselves in ways that often seem
    improbable. This blog explores the science of life and disease, the
    mechanisms that shape them, and the questions that continue to drive our
    search for understanding while deepening our appreciation of the living world.
  </p>

  <p><em>Magyarul</em></p>

  <p>
    Az élő rendszerek nem pusztán molekulák, sejtek vagy gének összességei.
    Növekednek, alkalmazkodnak, regenerálódnak és olyan módon szerveződnek,
    amely gyakran valószínűtlennek tűnik. Ez a blog az élet és a betegségek
    tudományát, az azokat formáló mechanizmusokat, valamint azokat a kérdéseket
    járja körül, amelyek továbbra is a megértés iránti törekvésünket hajtják,
    miközben egyre mélyebb megbecsülést ébresztenek bennünk az élő világ
    összetettsége iránt.
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