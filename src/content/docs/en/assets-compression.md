---
title: "Assets compression"
description: "Asset compression resources."
image: { src: /images/compression-image.jpg }
---

To ensure optimal performance, it's crucial to consider the size and format of assets used on your site. Here are the general parameters we follow:

- Mobile Version: Aim for asset sizes between 1kb and 350kb.
- Tablet Version: Keep assets between 500kb and 1mb.
- Desktop Version: Limit asset size to 2mb.

> IMPORTANT: While exceptions exist, these are the general guidelines we follow. Unless in completely necesary, no asset should be bigger than 3MB.

### Introduction

After a research made by our developer team to find the best asset compression tools, we determined the 5 most acclaimed image compression tools by the front-end community are:

- <a href="https://compressor.io/" target="_blank">Compressor.io</a>

- <a href="https://jpeg-optimizer.com/" target="_blank">JPEG optimizer</a>

- <a href="https://imagecompressor.com/" target="_blank">Optimizilla</a>

- <a href="https://tinypng.com/" target="_blank">TinyPNG</a>

- <a href="https://squoosh.app/" target="_blank">squoosh.app</a>

### PNG format test

The image used for performance testing in .png format weighs 4MB, and these are the results of the best 2 tools:

#### JPEG optimizer

![jpg optimizer test](/images/jpegoptimizerpng.png)

#### TinyPNG

![tinyPNG test](/images/tinypngpng.png)

### JPG format test

The image used for performance testing in .jpg format weighs 1MB, and these are the results of the best 2 tools:

#### Compressor.io

![tinyPNG test](/images/compressoriojpg.png)

#### TinyPNG

![tinyPNG test](/images/tinypngjpg.png)

### SVG format test

It is important to remember in this section that Compressor.io is the only tool among all the ones previously mentioned that can compress assets in .svg format.

### Conclusion

- Regarding the PNG format, JPEG optimizer is the tool with the best performance.

- Regarding the JPG format, Compressor.io is the tool with the best performance.

- Only Compressor.io is compatible with compressing SVG format.

- If there is a scenario where we have a very heavy PNG file and is not relevant if we use it as a compressed JPG in the project we are working on, compressing that PNG file to obtain a compressed JPG using Squoosh.app is the best option.

- It is important to mention that the tests on the tools were conducted using their free versions. Only Optimizilla and Squoosh can compress files larger than 10MB. In the case of Tiny PNG's free version, it only accepts files of 5MB or less.

> IMPORTANT: If you would like to check the results of the rest of the tools during our test, you can do so, by taking a look to our complete research <a href="https://docs.google.com/document/d/1yuBmqcXYEPBZDlnMtmNOlVGOT4PBck1c/edit?usp=sharing&ouid=111006603447264063807&rtpof=true&sd=true">HERE</a>.

**Do you prefer command line tools?**

You can optimize SVG files with <a href="https://github.com/svg/svgo" target="_blank">SVGO</a>. This is a Node.js tool for optimizing SVG files. It can be used to reduce the file size of SVG files by up to 90% without losing any quality.

In addition to size, selecting the right formats for each asset type is key. Here are some common examples:

- SVG (Scalable Vector Graphics): SVG is ideal for vector-based graphics, such as icons, logos, and illustrations. Being scalable, SVG images can be resized without losing quality, making them perfect for responsive web design. They are typically small in file size and contribute to faster loading times.

- PNG (Portable Network Graphics): PNG is a widely used format that supports lossless compression and transparency. It is best suited for images that require transparency, such as logos with transparent backgrounds or overlaying elements. However, PNG files tend to be larger than other formats, so it's essential to optimize them further if necessary.

- JPG/JPEG (Joint Photographic Experts Group): JPG is a highly optimized format commonly used for photographs and non-transparent images. It utilizes lossy compression, which reduces file size but may result in a slight loss of image quality. JPG files are excellent for displaying high-quality visuals while keeping the file size relatively small.

> Note: In rare cases we need to do more than just compressing the assets. Sometimes we need to do remove transparency, crop, resize, or even change the format of the asset. But this is not a common scenario.
