---
title: "Project Analysis"
description: "How we analyze a new project before starting to code."
image: {
    src: /images/planing-project.jpg,
    attribution: Photo by <a href="https://unsplash.com/@jasongoodman_youxventures?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jason Goodman</a> on <a href="https://unsplash.com/photos/Oalh2MojUuk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
}
---

When we start a new project, the first step in our web development workflow is to analyze the project thoroughly. This helps us to understand the project requirements and ensure that we are on the right track from the beginning of the project.

We also use this step to identify any potential issues that may arise during the project. This helps us to avoid any potential problems and ensure that we deliver the best results possible.

To do that, we receive the project design from the client and this could be in the form of a design file or a link to a design tool like Figma, Zeplin, Adobe XD... etc.

We'd like to break down this process into the following steps:

1. **[Requirements](#requirements)**
2. **[Components](#components)**
3. **[Assets](#assets)**
4. **[Stack](#stack)**
5. **[Browsers Support](#browser-support)**

## Requirements
Before starting any coding, make sure to go through the design requirements provided by the client. Understand the color scheme, typography, and the overall layout of the website.

## Components
Look for common design patterns that could be reused throughout the project. This includes header, footer, buttons, form fields, and other UI elements. Identifying reusable components can help save time and reduce code duplication.

## Assets
Make sure that all project assets, such as images, icons, and videos, are available in the propper format and size.

To ensure optimal performance, it's crucial to consider the size and format of assets used on your site. Here are the general parameters we follow:

Mobile Version: Aim for asset sizes between 1kb and 350kb.
Tablet Version: Keep assets between 500kb and 1mb.
Desktop Version: Maximum asset size should not exceed 2mb.

>IMPORTANT: While exceptions exist, it's important to avoid assets exceeding 3mb in size.

In addition to size, selecting the right formats for each asset type is key. Here are some common examples:

- SVG: Ideal for vectors like icons and graphics that scale without losing quality.
- PNG: Best used when transparency is required in the image.
- JPG: Highly optimized format, perfect for photographs and non-transparent images.

Sometimes, assets may not be provided in the required format.

In such cases, we can make minor edits to the assets, such as compressing them to reduce size or removing unnecessary transparent pixels.

Another situation arises when clients take too long to provide appropriate assets. If we request new assets and encounter delays, a quick edit to the existing asset can help us overcome the problem and avoid development delays.

We strongly recommend maintaining a shared document with the entire team to track assets that require improvement. This document can take the form of an Excel file, enabling parallel work and effective collaboration.

While we have covered the most important and easily implementable aspects, there are other well-known techniques that can further optimize assets. If you have any additional suggestions, please feel free to share them! Optimizing assets on a website is an ongoing process, and it benefits from various strategies. Let's ensure your website performs at its best!

## Stack
Our stack is based on the following technologies:
- HTML5 - Semantic markup
- CSS (Sass) and BEM methodology
- JavaScript Vanilla (ES6).

~~*We normally don't use any CSS or JS frameworks/libraries unless it's a special case. We prefer to use Vanilla JS and CSS to keep the codebase as simple as possible.*~~

We absolutely love the <a href="https://astro.build/" target="_blank">Astro framework</a>, and it's one of our key tools for developing highly customized and optimized websites in the shortest possible time, making us more productive.

Here are some of the reasons why utilizing the Astro framework is fantastic:

User-friendly: You don't need to be an expert to create something with Astro. It's designed to be accessible and easy to use for developers of all levels.

- Exceptional Performance: Astro leverages a build-time rendering approach, allowing us to generate static sites that load incredibly fast. By pre-rendering pages and components, we can deliver an outstanding user experience with minimal loading times.

- Seamless Integration: Astro seamlessly integrates with other tools and frameworks, giving us the best of both worlds. We can effortlessly incorporate JavaScript frameworks, leveraging their power while enjoying the benefits of Astro's static site generation.

- Enhanced Developer Experience: Astro prioritizes developer ergonomics, providing an excellent development experience. Its intuitive configuration and optimized build process make working with Astro a pleasure, saving us valuable time and effort.

- SEO-Friendly Architecture: Astro's static site generation capabilities ensure that our websites are search engine friendly. We can optimize meta tags, generate sitemaps, and take advantage of pre-rendered content, contributing to better search engine visibility.

- Comprehensive yet Flexible: With over 100 Astro integrations to choose from, it offers a comprehensive ecosystem. Additionally, its file-based routing system provides a flexible approach to structuring our projects.

>By utilizing the Astro framework, we unlock a world of possibilities to create stunning, high-performing static sites. Its speed, developer-friendly approach, and flexibility empower us to deliver top-quality websites efficiently.

## Browser Support
We support the latest versions of the following browsers:
- Chrome
- Firefox
- Edge
- Safari (desktop and mobile devices).

<br /><br />
***
Next: [Codebase](/en/codebase)