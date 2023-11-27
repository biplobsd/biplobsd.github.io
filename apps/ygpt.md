---
logoUrl: https://user-images.githubusercontent.com/43641536/284902867-e3deed55-aee7-4333-847c-8cd032327eea.png
title: "YGPT: YouTube GPT"
category: Tools
img_1: https://github.com/biplobsd/biplobsd.github.io/assets/43641536/39820c28-6399-464c-a5ad-93c6a30317fa
img_2: https://github.com/biplobsd/biplobsd.github.io/assets/43641536/ac3f04e9-48b1-4df5-a78b-e8d96290bb2f
---

| Enable/Disable - Difference |
| :--: |
| <div class="diff rounded-btn aspect-[16/9]"><div class="diff-item-1"><center><img alt="Normal screen" src="https://github.com/biplobsd/biplobsd.github.io/assets/43641536/31f67f13-aebf-44bc-9b62-15492c1efdba"></center></div><div class="diff-item-2"><center><img alt="Labeled video titles" src="https://github.com/biplobsd/biplobsd.github.io/assets/43641536/0e3f0888-af1e-4c25-ac30-ebebac2962d1"></center></div><div class="diff-resizer"></div></div> |

Using OpenAI GPT to check whether YouTube videos are `watch` or `ignore`, based on your given prompt.

## Features

- 🤖 Using the OpenAI API to determine all video titles based on your given prompt.
- 🌈 Video title colored based on your prompt
- 🎨 Option to modify title colors
- 📋 20 templates for saving, editing, and quickly switching prompts
- ⚙️ One-click AI toggle button for turning on/off
- 🌗 Dark/light theme mode
- 🛠️ Manually updating xpaths for future fixes.
- 🎁 ...much more

## Usages

### Set up your OpenAI API key

First, you need to set up your OpenAI API key for using this extension. Go to [platform.openai.com/api-keys](https://platform.openai.com/api-keys) and get your API key. Don’t forget to set up your `Usage limits`.

After creating the API key, open YGPT from the extension panel, and then go to settings > OpenAI API key box, fill in your key.

![OpenAI API Key](https://github.com/biplobsd/biplobsd.github.io/assets/43641536/987e6c4c-3238-41ad-821f-a01d8615edfe)

Now click on the Home tab and turn on AI checking. Done. Now go to youtube.com and enjoy YGPT.

## Errors

If YGPT catches any error, the icon will turn red, and YGPT will turn off. You need to manually clear the error message and turn on AI checking again.

## Templates

Templates are your prompt notebook. You can create a maximum of 20, edit, delete templates. By clicking on the template, you can set it to the prompt section.

![Templates section](https://github.com/biplobsd/biplobsd.github.io/assets/43641536/041c2cfc-5bf2-42a3-9b57-6b3778ce7b98)

When you hover over the template, you can see two buttons on the top right side: Edit and delete. Clicking on the edit button will show a popup for updating your prompt. The delete button will delete your prompt. If you hover over the Templates label, you can see the add button.

## Prompt

![Prompt](https://github.com/biplobsd/biplobsd.github.io/assets/43641536/81af1e08-ea96-4c87-babf-9d0eeb0348e6)

Here you can set your prompt for checking the video title. In YGPT, I use the OpenAI ChatCompletion function to get the output from the model. Your prompt will act as a user role. You can also set the first system prompt for better performance.

## Sentiment Color

![sentiment color section](https://github.com/biplobsd/biplobsd.github.io/assets/43641536/0964e50b-14f2-4ab5-93ac-941d6f19b733)

You can customize the video title color from this option. Watch is the model determined that you need to watch, and ignore the title. Clicking on the watch button will show a color picker, then choose your color.

## OpenAI API Key

Your OpenAI API key. Get your API key from [platform.openai.com/api-keys](https://platform.openai.com/api-keys) and set it here.

## System Prompt

This prompt will be sent as a system role. Then all of your video titles will be sent as the next chat object as a system role.

## XPaths

XPath is used for finding elements, like where is the video title, is that progress bar loading appearing or not. If YouTube updates their page UI, then this XPath needs to be updated.

![XPaths](https://github.com/biplobsd/biplobsd.github.io/assets/43641536/e6a50670-78fd-4ebc-8d47-d3e79e89b1ac)

The XPaths auto-update when server workers receive ready messages from content scripts. You can disable this update by adding `REMOTE_DISABLE: true` to the JSON object. Then set your custom XPath value, now you will not lose your XPath.

The Fetch Update button will manually trigger the fetch request.

## Bug, issues & request feature

Before reporting, please add a proper description and screenshots to help fix the problem. Report on Github issue tab - [github.com/biplobsd/ygpt/issues](https://github.com/biplobsd/ygpt/issues)

If this app has been helpful to you, consider [buying me a ☕coffee](https://www.buymeacoffee.com/biplobsd). It would make me very happy 😃.
