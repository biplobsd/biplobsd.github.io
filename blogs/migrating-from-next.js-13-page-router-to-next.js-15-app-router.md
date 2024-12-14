![AI-preview](https://github.com/user-attachments/assets/0a379c1b-37be-4257-8414-3670d46c496f)

# Migrating from Next.js 13 Page Router to Next.js 15 App Router

This week, I successfully migrated my old Next.js blog site to the latest Next.js 15 App Router. In this blog, I’ll share the challenges I faced and the steps migration process. Hopefully, this guide will help you streamline the migration of your own projects.

<video width="100%" height="100%" autoplay muted loop>
  <source src="https://github.com/user-attachments/assets/6cacc375-5c82-4594-b475-13a6d7e2f725" type="video/webm">
</video>

Let’s start with an overview of my website and how it operates with GitHub Pages.

## How My Website Works

First, let me explain how my blog site operates. I’ve been developing this site for about a year, using the Next.js T3 stack to statically generate blog pages and host them for free on GitHub Pages. This approach eliminates the need for a server and ensures a fast, smooth-running site.

![overview-pnp](https://github.com/user-attachments/assets/43a57d41-6e01-4c37-a6cd-1b4f7487386c)

Whenever I make changes to the data repository where my website’s content is stored, a GitHub Actions workflow is triggered. This workflow runs a build step to export a static site. The workflow’s YAML file contains all the necessary environment configurations and build steps, making it straightforward to modify or replicate.

![github-action-workflow-yml](https://github.com/user-attachments/assets/76e8514f-c7ce-4b40-8b34-e60014721f34)

You can view my GitHub Actions workflow [here](https://github.com/biplobsd/biplobsd.github.io/blob/data/.github/workflows/build-and-deploy.yml
).

Here are my repository
- Data: https://github.com/biplobsd/biplobsd.github.io
- Nextjs Template: https://github.com/SpeedOut-Source/pnp


## Benefits of the Upgrade

### Before

![image](https://github.com/user-attachments/assets/4eff01e9-0263-4dce-a27c-3312675c68a3)
![image](https://github.com/user-attachments/assets/8a99b5b9-faf9-4098-88d9-aeb38e98678c)


The older structure had some limitations:

- Redundant code.
- A more cluttered project directory.
- Limited exposure to newer Next.js features.

### After

![image](https://github.com/user-attachments/assets/6c84c626-51f1-4061-ab20-4fd50fdddd1d)
![image](https://github.com/user-attachments/assets/e206c8ff-8a74-4537-99e9-97c2e9721d6e)

Next.js 15 introduces:
- A cleaner directory structure under src/app, which centralizes pages and components.
- Dynamic routing to manage similar pages (e.g., blogs, projects, and company pages) with less duplication.
- Simplified setup for future changes.
- Improved runtime performance, although the initial JavaScript load is slightly higher and requires optimization.

### Directory Structure Comparison

Before             |  After
:-------------------------:|:-------------------------:
![image](https://github.com/user-attachments/assets/40be0d20-a686-42ad-a32e-731c0a417cb0) | ![image](https://github.com/user-attachments/assets/12e5ac61-2767-49c5-801a-fa089d2a674a)

This new structure reduces clutter and simplifies maintenance. Any changes can now be applied in one place and reflected across all relevant pages.

## Upgrading the T3 Stack

The T3 stack provides an excellent starting point for projects, including features like environment validation, Tailwind CSS, and TypeScript. To upgrade:

1. Run the command:
`npm create t3-app@latest .`

2. Overwrite all files in the existing project.
3. Compare file differences and apply the necessary updates manually.

For detailed guidance, check the T3 stack’s [GitHub repository](https://github.com/t3-oss/create-t3-app/tree/main/upgrade).

## Migrating from Page Router to App Router

Initially, I thought migrating to the App Router would be challenging because it required reorganizing the entire directory structure under `src/app`. However, following the [official migration documentation](https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration) made the process much smoother.

## SEO Enhancements

Previously, I used the next-seo library for SEO configurations. With Next.js 15, this approach has been deprecated. The new native generateMetadata function is now used for setting page titles, descriptions, and Open Graph configurations.

Here’s an example of the change:

### Before:
```typescript
import { NextSeo } from 'next-seo';

<NextSeo title="Blog Title" description="Blog Description" />
```

### After:
```typescript
export async function generateMetadata() {
  return {
    title: 'Blog Title',
    description: 'Blog Description',
    openGraph: {
      title: 'Blog Title',
      description: 'Blog Description',
    },
  };
}
```

## Bug Faced During Migration

While working on the migration, I encountered a Next.js 15 Turbo dev bug. When running `npm run dev` with `--turbo`, I received the following error when visiting the `/resume` page. This issue occurred because the `/resume` page uses `react-pdf`, which internally requires the `canvas` module. However, Next.js Turbo did not correctly detect that `canvas` should only be used on the client side.

```typescript
Error: ./node_modules/.pnpm/pdfjs-dist@2.15.349/node_modules/pdfjs-dist/build/pdf.js:10926:20
Module not found: Can't resolve 'canvas'
  10924 | class NodeCanvasFactory extends _base_factory.BaseCanvasFactory {
  10925 |   _createCanvas(width, height) {
> 10926 |     const Canvas = require("canvas");
        |                    ^^^^^^^^^^^^^^^^^
  10927 |
  10928 |     return Canvas.createCanvas(width, height);
  10929 |   }
```

After extensive research, I found a working solution. To fix this bug, update the `next.config.mjs` file as follows (source: [react-pdf GitHub](https://github.com/wojtekmaj/react-pdf?tab=readme-ov-file#nextjs)):

```typescript
const config = {
  // Rest of the code
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Fix react-pdf referencing canvas in SSR
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      config.resolve.alias.canvas = false;
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    config.resolve.alias.encoding = false;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return config;
  },
  experimental: {
    turbo: {
      resolveAlias: {
        canvas: "./empty-module.ts",
      },
    },
  },
};
```

Additionally, create an `empty-module.ts` file in the root of the project:

```typescript
// empty-module.ts
export default {};
```

This resolved the issue and allowed the `/resume` page to function as expected.


## New Features and Improvements of My Site

### Tag Feature

I introduced a dynamic tagging system to highlight my expertise with recent technologies. This feature not only improves the site’s usability but could also enhance SEO optimization.

![image](https://github.com/user-attachments/assets/567eb9e5-7fc5-4e8c-b818-17a3e2556d1b)

### Updated Homepage

I replaced the hero testimonials section with a dynamic blog section on the homepage. This adjustment prioritizes updated content and improves the chances of recent changes being indexed by search engines. Testimonials now serve as a trust-building element rather than the primary focus.

## Conclusion

Upgrading to Next.js 15 was both a learning experience and a significant enhancement for my blog site. The cleaner structure, new features, and improved performance make it a worthwhile investment of time. As someone working in software development, staying updated with the latest frameworks and technologies is invaluable for tackling live product challenges and implementing new features efficiently.

If you’re planning a migration, I hope this guide helps simplify the process for you. Feel free to share your experiences or ask questions in the comments!

