---
title: Crop Pixel Playground
---

![cpp-preview](https://raw.githubusercontent.com/biplobsd/biplobsd.github.io/data/images/cpp-preview.gif)

# Crop Pixel Playground

Crop Pixel Playground is an app that allows you to crop an image into blocks of small images. It generates multiple chunks of small images from the given image, and all the processing is performed on your device without using any API. This app is free to use and is supported on Android, Windows, and the web.

## Usages

This app is supported on

| Android | Window | Web |
|:-:|:-:|:-:|
| [<img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" height="75">](https://play.google.com/store/apps/details?id=com.speedout.cppg) | [<img src="https://get.microsoft.com/images/en-us%20dark.svg" height="55">](https://apps.microsoft.com/store/detail/crop-pixel-playground/9NXP42BX8X7M?hl=en-us&gl=us) | [<img src="https://raw.githubusercontent.com/biplobsd/biplobsd.github.io/data/images/cpp-logo.png" height="100">](https://croppixel.web.app) |

To use the app, you need to set the x and y values and upload the image by tapping the upload image button. Then, adjust the zoom or pan to fit the grid and tap the capture button to crop the image. Sometimes, the loading Save button will enable you to save the cropped images. The app creates a zip file containing the cropped image, the main image, and a fileinfo.json.

## Features

1. Blocks size adjust as x, y value.
2. Interactive image scaling and pan slide.
3. Image rotate
4. Download/Save image into download folder. Internal storage/ Download/cppg/
5. Using Isolate(multithread) to blocking image as fast as possible.
6. Adjust scale factor.
7. Block image size height, width adjustable in setting page.
8. Restore app setting value using 'Factory reset' option in setting page.
9. Dark/Light mode theme.
10. Image supported png, jpeg.
11. Save processed image as zip file. In zip file include fileinfo.json to get blocks name and files information.
12. Adaptive design.
13. Gif/Apng supported

## App Technology
Crop Pixel Playground is built using Flutter, which is ideal for making this kind of tool. Dart is the language in which Flutter is built, and it is a strongly typed language.


if you need more feature on this app, highly requested to create an issue on our GitHub repository https://github.com/biplobsd/cppg-build/issues tab.
