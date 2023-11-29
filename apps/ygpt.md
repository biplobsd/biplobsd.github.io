---
logoUrl: https://user-images.githubusercontent.com/43641536/284902867-e3deed55-aee7-4333-847c-8cd032327eea.png
title: "YGPT: YouTube GPT"
category: Productivity
p_name_1: Chrome Web Store
p_link_1: https://chrome.google.com/webstore/detail/ckkahgcopajmaohkdnijmmmlhjddeoan
p_name_2: Edge Add-ons
p_link_2: https://microsoftedge.microsoft.com/addons/detail/ijkiklmaokjhjcbnipjdhcajanbikhmg
img_1: https://github.com/biplobsd/biplobsd.github.io/assets/43641536/5985e9c8-ea85-4d06-848d-b084db7e6a07
img_2: https://github.com/biplobsd/biplobsd.github.io/assets/43641536/cc32e4a9-af51-432c-afa9-b835da7efccb
---

| Enable/Disable - Difference |
| :--: |
| <div class="diff rounded-btn aspect-[16/9]"><div class="diff-item-1"><center><img alt="Normal screen" src="https://github.com/biplobsd/biplobsd.github.io/assets/43641536/56a52223-5921-48e8-a1ad-db0528b26e6a"></center></div><div class="diff-item-2"><center><img alt="Labeled video titles" src="https://github.com/biplobsd/biplobsd.github.io/assets/43641536/64462374-8e0a-4b1b-a1a1-d031437f5ebe"></center></div><div class="diff-resizer"></div></div> |

Using OpenAI GPT to check whether YouTube videos are `watch` or `ignore`, based on your given prompt.

## Features

- 🤖 Using the OpenAI API to determine all video titles based on your prompt
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

![OpenAI API Key](https://github.com/biplobsd/biplobsd.github.io/assets/43641536/60e37f11-a1ff-427d-b8f9-bfe82a7d44f3)

Now click on the Home tab and turn on AI checking. Done. Now go to youtube.com and enjoy YGPT.

## Errors

If YGPT catches any error, the icon will turn red, and YGPT will turn off. You need to manually clear the error message and turn on AI checking again.

## Templates

Templates are your prompt notebook. You can create a maximum of 20, edit, delete templates. By clicking on the template, you can set it to the prompt section.

![Templates section](https://github.com/biplobsd/biplobsd.github.io/assets/43641536/a30fb594-6cf0-4394-8487-cc5cd8448576)

When you hover over the template, you can see two buttons on the top right side: Edit and delete. Clicking on the edit button will show a popup for updating your prompt. The delete button will delete your prompt. If you hover over the Templates label, you can see the add button.

## Prompt

![Prompt](https://github.com/biplobsd/biplobsd.github.io/assets/43641536/f0e35198-8b9e-422f-8387-49fd72a5c88b)

Here you can set your prompt for checking the video title. In YGPT, I use the OpenAI function calling to get the output from the model. Your prompt will act as a user role. You can also set the first system prompt in the settings tab for better performance.

## Sentiment Color

![sentiment color section](https://github.com/biplobsd/biplobsd.github.io/assets/43641536/33804cd1-023f-4523-b991-e517684ed702)

You can customize the video title color from this option. Watch is the model determined that you need to watch, and ignore the title. Clicking on the watch button will show a color picker, then choose your color.

## OpenAI API Key

Your OpenAI API key. Get your API key from [platform.openai.com/api-keys](https://platform.openai.com/api-keys) and set it to `settings>OpenAI API Key` field.

## Model

Set your GPT model name. Make sure the model support Function calling. Read more on [platform.openai.com/docs/guides/function-calling/supported-models](https://platform.openai.com/docs/guides/function-calling/supported-models)

## System Prompt

This prompt will be sent as a system role. Then all of your video titles will be sent as the next chat object as a system role.

## XPaths

XPath is used for finding elements, like where is the video title, is that progress bar loading appearing or not. If YouTube updates their page UI, then this XPath needs to be updated.

![XPaths](https://github.com/biplobsd/biplobsd.github.io/assets/43641536/6a96ceef-a65f-4d94-9d5a-706d935bd4e8)

The XPaths auto-update when server workers receive ready messages from content scripts. You can disable this update by adding `REMOTE_DISABLE: true` to the JSON object. Then set your custom XPath value, now you will not lose your XPath.

The Fetch Update button will manually trigger the fetch request.

## Bug, issues & request feature

Before reporting, please add a proper description and screenshots to help fix the problem. Report on Github issue tab - [github.com/biplobsd/ygpt/issues](https://github.com/biplobsd/ygpt/issues)

## Donation

If this app has been helpful to you, consider [buying me a ☕coffee](https://www.buymeacoffee.com/biplobsd). It would make me very happy 😃

<a href="https://www.buymeacoffee.com/biplobsd" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

