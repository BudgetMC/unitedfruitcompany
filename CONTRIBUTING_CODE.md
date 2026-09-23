# A note to future developers

This is a guide for students who wish to work on the JavaScript code in the frontend. If you're not a programmer and you just want to add posts, check out CONTRIBUTING_NON_CODE.md instead.

## Introduction

You're probably reading this in 2025 or 2030. I'm writing this at the tail end of 2021.

This long gap between my initial development and your future contribution weighed heavily on the technical choices I made for the project.

The backend uses Wordpress, which should be around for a long time. The frontend uses [Next.js](https://nextjs.org/), which is currently the trendiest, most up-and-coming JavaScript framework available. By the time you read this, it will probably be old and dated like JQuery and Angular are to me. This is one of the unfortunate risks of software development. I hope that you're willing to work on a codebase that doesn't use the trendiest tech stack of your time, but you can of course rip it all out and start fresh if you want.

## Wordpress as a headless CMS

This site uses Wordpress as a [headless CMS](https://en.wikipedia.org/wiki/Headless_content_management_system), which means we use Wordpress to manage posts and images, but we ignore the ugly site that it generates for us. Instead, we use a fancy frontend made with Next.js that retrieves the posts using the Wordpress API.

## About Next.js

Next.js is built on top of React, a framework for single-page web applications, but it also generates static HTML pages to help our site in the search rankings. If you've used React before, you're already 90% of the way to understanding Next.js. If not, it's useful to get a [basic understanding of what a component is](https://react.dev/reference/react/Component).

When you run `npm run build`, Next.js will grab all the posts from Wordpress and generate each individual page. One big benefit of Next.js is that navigating between posts in your browser is even faster than a traditional HTML site, because Next.js uses background prefetching and JSON requests to load stuff before the user clicks on it.

The `pages` folder is mapped to the parameters in the URL. For example, `pages/documents/index.tsx` represents `https://unitedfruitcompany.com/documents`. This makes it easy to add new pages.

Pages, like React components, receive all their data as "props". Next.js uses functions called `getStaticProps` and `getStaticPaths` to fetch data at build time. These functions are defined at the bottom of each page file, below the page contents.

Other stuff, like the search functionality, can't be included in static generation. The code to handle this goes into `pages/api`, which has the same path system as the regular pages: `pages/api/search/[query.ts]` represents `https://unitedfruitcompany.com/api/search/whatever`. You can fetch from these URLs inside of components. Check out the code in `hooks/usePageQuery.tsx` for an example of how we fetch posts from Wordpress's API to match a search query.

I know that's not a very in-depth explanation of how to use Next.js if you haven't used it, but I'm hoping their [documentation](https://nextjs.org/docs) is still available by the time you're reading this. It will go into more detail.

## Wordpress's weird API

The Wordpress API is very weird. It provides a lot of junk we don't need, and some of what we do need is in a weird format that would be a pain to work with.

To deal with this, we use a simple function called `formatPosts` in `lib/posts.ts`. This dumps the stuff we don't need and converts the other stuff into a more useful structure. Any time you recieve posts from the Wordpress API, you need to run them through `formatPosts`, because that's the format that all the post handling code expects.

The first time Next.js fetches the posts, it will save them in a file at `.cache/posts`. Next time, it will just read that file instead of contacting Wordpress again. This is to avoid constantly bombarding Wordpress with requests. If you updated something on Wordpress, or if you just need fresh data, you can run `npm run clearcache` to wipe the cache. The next build will get fresh post data again. Anything called by a `getStaticProps` function should fetch its posts through `getPosts()` in `lib/cache`, which is where the cache handling occurs.

## Some other stuff to keep in mind

This site is hosted on Vercel, which has a 100 GB bandwidth limit. This is isn't a problem at all as long as you don't serve images or other resources directly from the site. All images are hosted on Wordpress, and we just link to them, so they don't count against our bandwidth. Wordpress has no bandwith limit so it works well. If you want to change the fonts, don't host a font directly on the site, because they use quite a bit of bandwidth. Instead, use Google Fonts or whatever other font hosting service exists in the future.

Next.js and Vercel will constantly try to get you to use their `Image` component for faster speeds, etc. Ignore them. First of all, running our images through their optimizer means Vercel serves the images directly, meaning our bandwidth limit is used up a lot faster. Secondly, for loading speed improvements, Wordpress already offers very similar image optimization--it's just a bit hidden.

Let's say we have an image: `https://unitedfruitcompany.wordpress.com/wp-content/uploads/2021/11/senator_john_foster_dulles_r-ny.jpg`

Hotlinking that URL directly will download an unoptimized JPG file. However, we can add `?w=600` at the end:

`https://unitedfruitcompany.wordpress.com/wp-content/uploads/2021/11/senator_john_foster_dulles_r-ny.jpg?w=600`

This 1) resizes the image to fit within the width limit (in this case 600px) and 2) converts the image to `webp` format for significant bandwidth savings.

If the image is smaller than the width limit, Wordpress just sends the original size converted to webp. This is the case for the image above. We could also use `https://unitedfruitcompany.wordpress.com/wp-content/uploads/2021/11/senator_john_foster_dulles_r-ny.jpg?w=20` to get a tiny image.

With that in mind, try to avoid hotlinking an image without `w=x` at the end, where `x` is a number of pixels. This little Wordpress hack provides us with basically the same optimization that Vercel tries to sell without cutting into Vercel's bandwidth limit.

## Where to go next

The README file contains basic documentation on all the components, hooks, and npm commands.

I also recommend reading about [React hooks](https://react.dev/reference/react/hooks) and [JSON REST APIs](https://restfulapi.net/introduction-to-json/) if you're not familiar with them. It will also be useful to read `CONTRIBUTING_NONCODE.md` to get an idea of how your classmates will be using Wordpress for managing posts.

With the codebase in your hands, you can make whatever changes you want. Add new categories, new tag functionality, an interactive 3D globe, or anything else. Maybe you disagree with some of my design choices--you can change everything to your specification. This is the fun part of being a developer. The possibilities are limitless.

Keep in mind that, at the time of writing this, I'm not actually very experienced. This has been my first paid project (sorry, I'm doing this as a freelancer, you're probably doing this for class credits!) after a year and a half of self-teaching. If you feel like some code I wrote is wrong or confusing, there's a good chance you're right. Don't be afraid to reshape the codebase in your own image.

If you still have unanswered questions, I'm hopefully still around somewhere! Wherever I am in 5-10 years, I should be able get in touch for an hour or two and help you find your way around the codebase.
