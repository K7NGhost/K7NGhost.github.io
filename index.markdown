---
layout: default
title: Home
---

<div class="blog-area">
    <!--Loops through all Markdown files in the _posts/ directory-->
    {% for post in site.posts %} 
    <!--Generates the URL for each post automatically-->
    <a href="{{ post.url | relative_url }}" class="blog-link">
        <div class="blog-title-container">
        <i class="fa-solid fa-book"></i>
        <i class="fa-solid fa-pen"></i>
        <!--Displays the title defined in the front matter of each Markdown file-->
        <h2 class="blog-title">{{ post.title }}</h2>
        </div>
        <!--Displays an excerpt of the post (or the first paragraph)-->
        <p class="blog-summary">{{ post.excerpt | strip_html }}</p>
    </a>
    {% endfor %}
</div>

