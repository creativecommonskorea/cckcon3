---
layout: home
permalink: /
#title: "Welcome to CCKcon 2014"
image:
  feature: global.jpg
---
<h2>Speakers</h2>
<div class="tiles">
{% for speaker in site.data.speakers %}
  {% include speaker.html %}
{% endfor %}
</div><!-- /.tiles -->
