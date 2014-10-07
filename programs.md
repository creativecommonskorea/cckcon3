---
layout: default
permalink: /programs/
title: programs
image:
  feature: after-banner.jpg
---

{% assign levels =  site.program | group_by:"session" %}
<ul>
{% for level in levels %}
  <li>
    {% assign session_id = level.name | %}
    세션 {{ session_id }}
    {{ site.data.sessions.ko.session_id }} <a href="{{ post.url }}">{{ post.title }} - {{ post.speaker }} </a>
  </li>
{% endfor %}
</ul>

{{ site.data.sessions.ko.2 }}
