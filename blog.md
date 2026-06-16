---
layout: default
title: Blog
permalink: /blog/
---

<section>
  <h2>Blog</h2>

  <p><em>in English</em></p>

  <p>
    Living systems are not simply collections of molecules, cells, or genes.
    They grow, adapt, repair, and organise themselves in ways that often seem
    improbable. This blog explores the science of life and disease, the
    mechanisms that shape them, and the questions that continue to drive our
    search for understanding while deepening our appreciation of the living world.
    In this blog, I occasionally write about my own projects, professional and personal experiences.

  </p>

  <p><em>Magyarul</em></p>

  <p>
    Az élő rendszerek nem pusztán molekulák, sejtek vagy gének összességei.
    Növekednek, alkalmazkodnak, regenerálódnak és olyan módon szerveződnek,
    amely gyakran valószínűtlennek tűnik. Ez a blog az élet és a betegségek
    tudományát, az azokat formáló mechanizmusokat, valamint azokat a kérdéseket
    járja körül, amelyek továbbra is a megértés iránti törekvésünket hajtják,
    miközben egyre mélyebb megbecsülést ébresztenek bennünk az élő világ
    összetettsége iránt. Ebben a blogban alkalmanként a saját projektjeimről, valamint szakmai és személyes tapasztalataimról is írok.
  </p>

  <hr>

  <h2>Subscribe</h2>

  <p>
    Receive occasional email updates when new posts are published.
  </p>

  <form
    action="https://buttondown.com/api/emails/embed-subscribe/agnjuh"
    method="post"
    target="popupwindow"
    onsubmit="window.open('https://buttondown.com/agnjuh', 'popupwindow')"
    class="embeddable-buttondown-form"
  >
    <label for="bd-email">Email address</label>
    <input
      type="email"
      name="email"
      id="bd-email"
      placeholder="your@email.com"
      required
    >
    <input type="submit" value="Subscribe">
  </form>

  <p>
    RSS feed: <a href="/feed.xml">feed.xml</a>
  </p>

  <hr>

  <h2>Latest Posts</h2>

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