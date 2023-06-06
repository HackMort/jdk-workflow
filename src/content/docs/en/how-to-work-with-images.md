---
title: "How to work with images"
description: "How we can make some little modifications to image assets."
image: {
    src: /images/edit-images.jpg,
    attribution: Photo by <a href="https://unsplash.com/@markusspiske?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Markus Spiske</a> on <a href="https://unsplash.com/images?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
}
---

To ensure optimal performance, it's crucial to consider the size and format of assets used on your site. Here are the general parameters we follow:

- Mobile Version: Aim for asset sizes between 1kb and 350kb.
- Tablet Version: Keep assets between 500kb and 1mb.
- Desktop Version: Limit asset size to 2mb.

>IMPORTANT: While exceptions exist, these are the general guidelines we follow. Unless in completely necesary, no asset should be bigger than 3MB.

We use some tools to compress images, our favorite ones are:

- <a href="https://compressor.io/" target="_blank">Compressor.io</a>: Is a free online image compressor that uses best-in-class compression techniques to reduce image size without loss in quality. It supports JPEG, PNG, SVG, GIF, and WEBP files. You can upload up to 10MB of images per day for free.

- <a href="https://compressimage.io/" target="_blank">CompressImage.io</a>: Is a free online image compressor that uses state-of-the-art compression techniques to reduce image size without loss in quality. It supports JPEG, PNG, and WebP files. There are no limits on how many images you can compress or what size of image you can convert. Your images are totally safe and private as no one else can see your images. Since no servers are involved in the compression process, zero extra electricity is used, hence no carbon emitted.

- <a href="https://imagecompressor.com/" target="_blank">Optimizilla</a>: Is a free online image compressor that uses smart algorithms to reduce image size without loss in quality. It supports JPEG, PNG, and GIF files. You can upload up to 20 images at once and the results are ready in seconds.

- <a href="https://tinypng.com/" target="_blank">TinyPNG</a>: Is a free online image compressor that uses smart lossy compression techniques to reduce the file size of your JPEG and PNG files. By selectively decreasing the number of colors in the image, fewer bytes are required to store the data. The effect is nearly invisible but it makes a very large difference in file size.

**Do you prefer command line tools?**

You can optimize SVG files with <a href="https://github.com/svg/svgo" target="_blank">SVGO</a>. This  is a Node.js tool for optimizing SVG files. It can be used to reduce the file size of SVG files by up to 90% without losing any quality.

In addition to size, selecting the right formats for each asset type is key. Here are some common examples:

- SVG (Scalable Vector Graphics): SVG is ideal for vector-based graphics, such as icons, logos, and illustrations. Being scalable, SVG images can be resized without losing quality, making them perfect for responsive web design. They are typically small in file size and contribute to faster loading times.

- PNG (Portable Network Graphics): PNG is a widely used format that supports lossless compression and transparency. It is best suited for images that require transparency, such as logos with transparent backgrounds or overlaying elements. However, PNG files tend to be larger than other formats, so it's essential to optimize them further if necessary.

- JPG/JPEG (Joint Photographic Experts Group): JPG is a highly optimized format commonly used for photographs and non-transparent images. It utilizes lossy compression, which reduces file size but may result in a slight loss of image quality. JPG files are excellent for displaying high-quality visuals while keeping the file size relatively small.

>Remember, while we don't work with graphics, sometimes we have to make a little modifications to the provided assets ie: compressing, remove transparent pixels/backgrounds and stuffs like those.