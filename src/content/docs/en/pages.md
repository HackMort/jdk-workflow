---
title: "Pages"
description: "How we create pages."
---

From setting up the file structure and HTML layout to applying styles and optimizing for mobile devices, we'll cover everything you need to know to create web pages that are functional, user-friendly, and visually appealing.

_Let's get started!_

## File
Before we start creating a page, it's essential to know the structure, order, and names of all the different pages of the website. This information is usually provided by the client, which helps us determine the folder where the page should be placed and its name. We follow the ***kebab case*** naming convention for the page names.

## HTML
Once we have our HTML file, we add the standard HTML5 structure, along with the site's layout, including header, footer, and any other components that make up the overall layout. These elements/components are the ones we already created in the [Components](/en/components) section.

It is important to implement a semantic HTML structure. This means that we use the correct HTML tags for each element. For example, we use the `<header>` tag for the header, the `<main>` tag for the main content, and the `<footer>` tag for the footer. This helps us create a more accessible website and makes it easier for search engines to crawl the website.

## Mobile First
We always start by creating the mobile version of the page. This is because mobile devices are the most popular devices used to access the web. By creating the mobile version first, we can make sure that the page is functional and user-friendly on mobile devices. Once we have the mobile version of the page, we can start working on the desktop version. 320px wide is the minimum width we use for the mobile version of the page.

***Note:*** _We don't create the desktop version of the page first because it's easier to add more content to the page than to remove it._

## CSS
We group styles based on their corresponding HTML sections. For example, if we have sections that group content, we add a class to the section using the BEM naming convention, like this: ```<page-name>__<section-name>```.

We then use this class in SCSS to group the styles corresponding to its internal elements. This helps us avoid adding CSS rules that overwrite other rules in an uncontrolled way, much like a shadow DOM.

## Assets
If a page has assets, we usually group them within ```/assets/images/<page-name>``` for images, this way we can easily identify the assets that belong to a specific page and avoid having a large number of assets in the ```/assets/images``` folder.

>***Note:*** _This website is a work in progress. If you find any issues or have any suggestions, please let us know by creating an issue on <a href="https://github.com/HackMort/jdk-workflow/issues" target="_blank">GitHub</a>._

<br /><br />
***
Next: [Final Steps](/en/final-steps)