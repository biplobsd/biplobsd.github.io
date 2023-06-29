![preview](https://raw.githubusercontent.com/biplobsd/biplobsd.github.io/data/images/syntax-highlight-code-in-NextJS-tailwindcss-daisyui/preview-code-syntax-highlighter.gif)

# Syntax Highlight Code in NextJS TailwindCSS DaisyUI

Code syntax highlighting is needed to make code more readable and understandable. In this article, you will learn how to implement syntax highlighting in your Next.js website using TailwindCSS, DaisyUI, react-markdown, react-syntax-highlighter, and more.

I have created a simple repository for this tutorial. You can check it out to better understand how to implement this on your website. The link to the repository is provided in the full code section below.

## Install Dependencies

To use syntax highlighting, we need to install the following dependencies:

`npm i react-copy-to-clipboard react-syntax-highlighter`

For development dependencies, we need to install:

`npm i -D @heroicons/react @types/react-copy-to-clipboard @types/react-syntax-highlighter daisyui tailwind-scrollbar`

## Add `code` components in your ReactMarkdown

Wrap your Markdown string with the `<ReactMarkdown>` component for rendering. It should look like this:

Find your ReactMarkdown component or create a new component and pass the Markdown string to it.

### File `markdown_render.tsx`

```tsx
import ReactMarkdown from "react-markdown";

interface MarkdownRenderProps {
  mdString: string;
}

export default function MarkdownRender({ mdString }: MarkdownRenderProps) {
  return <ReactMarkdown>{mdString}</ReactMarkdown>;
}
```

In this ReactMarkdown component, we will add the `react-syntax-highlighter` to highlight our code.

## Adding `SyntaxHighlighter` to the ReactMarkdown

In the `ReactMarkdown` component, we can style our HTML tags by passing props to our `code` component. Update the `code` component with the following code snippet:

```tsx
import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface MarkdownRenderProps {
  mdString: string;
}

export default function MarkdownRender({ mdString }: MarkdownRenderProps) {
  return (
    <ReactMarkdown
      components={{
        code({ inline, className, ...props }) {
          const hasLang = /language-(\w+)/.exec(className || "");
          return !inline && hasLang ? (
            <SyntaxHighlighter
              style={oneDark}
              language={hasLang[1]}
              PreTag="div"
              className="mockup-code scrollbar-thin scrollbar-track-base-content/5 scrollbar-thumb-base-content/40 scrollbar-track-rounded-md scrollbar-thumb-rounded"
              showLineNumbers={true}
              useInlineStyles={true}
            >
              {String(props.children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props} />
          );
        },
      }}
    >
      {mdString}
    </ReactMarkdown>
  );
}
```

In this code, we are using TailwindCSS, DaisyUI, and tailwind-scrollbar to style the code block. It will now look like this:

When running `npm run dev`:

![highlight-added-dev-preview.png](https://raw.githubusercontent.com/biplobsd/biplobsd.github.io/data/images/syntax-highlight-code-in-NextJS-tailwindcss-daisyui/highlight-added-dev-preview.png)

When running `npm run build`:

![highlight-added-pro-preview.png](https://raw.githubusercontent.com/biplobsd/biplobsd.github.io/data/images/syntax-highlight-code-in-NextJS-tailwindcss-daisyui/highlight-added-pro-preview.png)

However, there is a problem with the code highlighting in `npm run build`. To fix this, we need to register the syntax highlighter languages in our `MarkdownRender` component file.

## Register Language for `SyntaxHighlighter`

We can register languages using the `registerLanguage` method provided by `SyntaxHighlighter`. Below, I have added some popular languages, but you can add more languages. Here is the list of supported languages by Prism. [Check here](https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/AVAILABLE_LANGUAGES_PRISM.MD) for the languages supported by Prism.

Add the following lines of code in the `MarkdownRender` component file:

```tsx
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import scss from "react-syntax-highlighter/dist/cjs/languages/prism/scss";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import markdown from "react-syntax-highlighter/dist/cjs/languages/prism/markdown";
import json from "react-syntax-highlighter/dist/cjs/languages/prism/json";
import lua from "react-syntax-highlighter/dist/cjs/languages/prism/lua";

SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("scss", scss);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("markdown", markdown);
SyntaxHighlighter.registerLanguage("json", json);
SyntaxHighlighter.registerLanguage("lua", lua);
```

## Adding Copy Code Button and Language Name

A copy code button will allow readers to quickly copy code snippets to their clipboard. This button is highly useful. Additionally, displaying the language name will help in better understanding the code.

To achieve this, we need to update the `pre` HTML tag in the code.

Here is the `pre` code for the MarkdownRender component:

```tsx
pre: (pre) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
  const codeChunk = (pre as any).node.children[0].children[0].value as string;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [copyTip, setCopyTip] = useState("Copy code");

  const language =
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-explicit-any
    (pre as any).children[0]?.props.className.replace(
      /language-/g,
      ""
    ) as string;

  return (
    <div className="relative overflow-x-hidden">
      <button
        style={{
          right: 0,
        }}
        className="tooltip tooltip-left absolute z-40 mr-2 mt-5"
        data-tip={copyTip}
      >
        <CopyToClipboard
          text={codeChunk}
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onCopy={async () => {
            setCopyTip("Copied");
            await new Promise((resolve) => setTimeout(resolve, 500));
            setCopyTip(`Copy code`);
          }}
        >
          <DocumentDuplicateIcon className="h-5 w-5 cursor-pointer hover:text-blue-600" />
        </CopyToClipboard>
      </button>
      <span
        style={{
          bottom: 0,
          right: 0,
        }}
        className="absolute z-40 mb-5 mr-1 rounded-lg bg-base-content/40 p-1 text-xs uppercase text-base-300 backdrop-blur-sm"
      >
        {language}
      </span>
      <pre {...pre}></pre>
    </div>
  );
};
```

## Final preview

![copy-button-language-name.png](https://raw.githubusercontent.com/biplobsd/biplobsd.github.io/data/images/syntax-highlight-code-in-NextJS-tailwindcss-daisyui/copy-button-language-name.png)

## Complete Code for `markdown_render.tsx`

You can find the source code for this tutorial on GitHub.
Project link: https://github.com/biplobsd/code-syntax-highlighter-tailwind-daisyui

To view the code for the `markdown_render.tsx` file, you can click on the following https://github.com/biplobsd/code-syntax-highlighter-tailwind-daisyui/blob/main/src/components/markdown_render.tsx

You can also see the, this website implementation of this code syntax highlighter on the PNP project, which is an open-source project. Here is the link to the PNP GitHub repository below -

https://github.com/SpeedOut-Source/pnp/blob/d03965a73d42751ae282b3613289695b0df06a6a/src/components/markdown/md_render.tsx

## Reference

Here are some other great blogs on this topic. I followed them to implement code syntax highlighting on this website:

- [Syntax Highlight Code in Markdown by Amir Ardalan](https://amirardalan.com/blog/syntax-highlight-code-in-markdown)
- [React Markdown — Code and Syntax Highlighting by Bexultan Myrzatay](https://medium.com/young-developer/react-markdown-code-and-syntax-highlighting-632d2f9b4ada)

## Conclusion

That's it! If you have any questions, feel free to ask in the comment box below. 🔥🔥🔥🔥

I hope this helps! Let me know if you have any further questions.
