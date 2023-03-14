---
title: "BEM"
description: "BEM Methodology"
---

## Methodology
CSS is a powerful tool that can be used to create beautiful and functional websites. However, as your website grows, it can become difficult to maintain and improve your CSS codebase. This is where BEM comes in.

Let's take a look at what BEM is and how it can help you write better CSS.

### What is it?
BEM is a methodology that aims to make your code more modular, reusable, and easier to maintain. It does this by breaking down your HTML and CSS into independent blocks, each with its own unique identifier.

Each block consists of one or more elements, which are smaller components that make up the block. Elements are always contained within the block and are identified by their name.

Modifiers are used to modify the appearance or behavior of blocks and elements. Modifiers are denoted by a double underscore ```(__)``` for elements and a double dash ```(--)``` for blocks.

### Benefits of BEM
Using BEM has several benefits, including:

1. **Modularity and reusability:**

BEM encourages the creation of independent, reusable blocks that can be easily modified or combined to create new components.

2. **Clear and descriptive naming:**

BEM's naming convention makes it easy to understand the structure and purpose of each block and element, even for someone who is not familiar with the codebase.

3. **Easier maintenance:**

BEM's modular approach makes it easier to make changes to specific components without affecting the rest of the codebase.

4. **Consistency:**

BEM's naming convention helps ensure consistency across your codebase, making it easier to maintain and improve over time.

### Naming Convention
BEM naming convention consists of three parts: Block, Element, and Modifier. Each part is separated by a double underscore ```(__)``` for elements and a double dash ```(--)``` for blocks. Let's look at each part in more detail:

### Block
A block is a standalone component that has a specific purpose and is not dependent on any other component. A block should have a unique and descriptive name that reflects its purpose. Block names are written in all lowercase letters and separated by a dash (-).

Example:
```html
<div class="menu">...</div>
```

### Element
An element is a smaller component that is contained within a block and has a specific purpose. Elements are always identified by their name and are separated from the block name by a double underscore ```(__)```. Element names are also written in all lowercase letters and separated by a dash (-).

Example:
```html
<div class="menu">
  <ul class="menu__list">...</ul>
</div>

```
### Modifier
A modifier is used to modify the appearance or behavior of a block or element. Modifiers are denoted by a double dash ```(--)``` for blocks and a double underscore ```(__)``` for elements. Modifier names are also written in all lowercase letters and separated by a dash

Example:
```html
<div class="menu menu--dark">
  <ul class="menu__list">...</ul>
</div>
```
In the above example, we are using the modifier menu--dark to modify the appearance of the menu block.

In the above example, we are using the modifier menu--dark to modify the appearance of the menu block.

### Example
Here is an example of how BEM can be used in practice:

#### Button Component
Let's say we want to create a button component. We can create a block called button and an element called text:
  
```html
<button class="button">
  <span class="button__text">Click me</span>
</button>
```
If we want to create a variation of the button, for example, a disabled button, we can add a modifier to the block:
```html
<button class="button button--disabled">
  <span class="button__text">Click me</span>
</button>
```
As you can see, BEM makes it easy to create reusable components and modify their appearance and behavior. It also makes it easy to understand the structure and purpose of each component. This makes it easier to maintain and improve your codebase over time.

If you want to learn more about BEM, check out the official <a href="https://en.bem.info/methodology/quick-start/" target="_blank">Documentation</a>.

Or...

Check out the video below for a more in-depth explanation of BEM:
<iframe width="560" height="315" src="https://www.youtube.com/embed/er1JEDuPbZQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

If you prefer an explanation in spanish, check out the video below:
<iframe width="560" height="315" src="https://www.youtube.com/embed/NucZM0GMRi4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

>***Note:*** _This website is a work in progress. If you find any issues or have any suggestions, please let us know by creating an issue on <a href="https://github.com/HackMort/jdk-workflow/issues" target="_blank">GitHub</a>._