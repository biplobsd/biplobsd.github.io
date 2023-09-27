---
appName: Action Tokens Collections
appLogo: https://raw.githubusercontent.com/biplobsd/biplobsd.github.io/data/images/logos/action-tokens.png
companyName: Action Tokens
companyLogo: https://raw.githubusercontent.com/biplobsd/biplobsd.github.io/data/images/logos/action-tokens.png
imgUrl: https://user-images.githubusercontent.com/43641536/232020542-503e6a6d-16da-4a3e-bfc1-7e10e5c5237a.png
whatText: Action Token Collections is an image and audio sharing website that stellar integrated.
result: With help of Albedo, Wallet Connect, Freighter and other user no need to create account
---

![preview gif](https://user-images.githubusercontent.com/43641536/232020542-503e6a6d-16da-4a3e-bfc1-7e10e5c5237a.png)

# Action Tokens Collections - Image and Audio Sharing Website

<a href="https://collections.action-tokens.com/">Live at collections.action-tokens.com</a>

## Overview

Action Tokens Collections is a website that allows users to share their images and audio, and showcase their media using items from Litemint and Fimi. It is built with Next.js and uses Firebase as its database service.

## Problem

The website has a problem identifying users by their public address, which is only available through wallet clients. Additionally, the website needs to support all wallet clients, and the budget is limited, requiring a cost-efficient backend solution.

## Solution

To address these issues, we chose Next.JS as our framework, TailwindCSS for frontend, and Firebase Firestore for backend database. Amazon Amplify was used as the backend for our client's Amazon Amplify account.

## Design

The design of Action Tokens Collections was based on the client's requirements and ideas, and our initial design was created using Canva. We went through several iterations before finalizing the website's design.

### Initial Canva design

![Initial Canva design](https://user-images.githubusercontent.com/43641536/232142586-754f13ff-ed77-4d34-8704-e50c50e921d0.jpeg)

### Final design

![Final design](https://user-images.githubusercontent.com/43641536/232143473-90377100-53cc-4146-82f0-294b096a8d8c.png)

The website features a modern and minimalist aesthetic with a focus on providing a user-friendly and intuitive experience. The layout is simple and clean, with clear navigation and organization of content. The color scheme is based on a dark theme, with contrasting bright colors used for accentuation. The website is designed to be responsive and accessible across a variety of devices, including desktops, tablets, and mobile devices. User interface components such as buttons, forms, and modals are styled using TailwindCSS, with custom styles added where necessary. Overall, the design showcases user media while providing a seamless and enjoyable browsing experience.

## Features

- Allows users to share images and audio
- Showcases user media using items from Litemint and Fimi
- Built with Next.js framework and Firebase database service
- Supports wallet clients including Albedo, Wallet Connect, Freighter, XBull, and Rabet
- Categories for trending arts, trending collections, and latest creations
- Allows users to explore arts or collections
- Item types supported include NFT or Special
- Users can fetch data from URL using LiteMint or Fimi
- Privacy lock available using asset code, asset issuer, and required amount on arts or collections
- Users can share media from YouTube or Dropbox links
- Each user has a unique access key for verification of their content

## Technology

- Next.js with TypeScript, a React-based web framework for server-side rendering.
- Firebase Firestore as the NoSQL database, providing data from cloud.
- TailwindCSS, a utility-first CSS framework for fast and easy customization
- Amazon Amplify as the backend
- Wallet client - Albedo, Wallet Connect, Freighter, XBull, and Rabet providing wallet client integration

## Team

- Jose Urquiza, <a href='https://twitter.com/@hollowvox'>@hollowvox</a>: Funned, Manager
- Biplob Kumar Sutradhar, <a href='https://twitter.com/@biplobsd11'>@biplobsd11</a>: Lead Developer
- Arnob dey, <a href='https://twitter.com/@arnob_016'>@arnob_016</a>: Design, client requirement sync

## Results

Users can now share their arts or LiteMint and Fimi data on the Action Token Collections website without creating an account. They can also control their items using asset code, asset issuer, and amount and share their items on social media.

## Future Plans

- Integration with more wallet clients to improve user accessibility
- Adding support for additional media types, such as video and text
- Implementing a feature to allow users to create and sell their own NFTs
- Developing a mobile app for better user experience on-the-go
- Partnering with other blockchain-based platforms to expand the reach of Action Tokens Collections
- Providing tools for artists to track and analyze the performance of their media on the platform
- 3D contents

## Conclusion

The implementation of Next.js, TailwindCSS, Firebase Firestore, and Amazon Amplify has enabled Action Tokens Collections to address the challenge of identifying users through their public address and support multiple wallet clients. The platform's privacy lock feature and ability to fetch data from URLs have added to its appeal.
