# Zola starter set

**Note**: Further development suspended as of 2021-09-11.

This is a starter set for the [Zola](https://getzola.org) [static site generator (SSG)](https://www.jamstack.org/generators), based on the appearance of my website at [brycewray.com](https://www.brycewray.com).

See the [online demo](https://zola-twcss.vercel.app/).

## How to use

1. Clone this to a local repo.
2. Make appropriate changes to `config.toml` to conform to your site’s parameters.
3. Once you have [installed Zola](https://www.getzola.org/documentation/getting-started/installation/), run `zola serve` from your terminal app. You can then [view the site on your computer](https://www.getzola.org/documentation/getting-started/cli-usage/#serve).
4. Read the sample posts and their Markdown files to see how everything works.
5. Edit the content to make it your own!
6. When ready, [deploy the site](https://www.getzola.org/documentation/deployment/overview/) to your chosen host.

## What’s under the hood

For Zola users unused to dealing with JavaScript from [Node.js](https://nodejs.org) plugins and dependencies, this repo may not be your cup of tea, and that’s perfectly understandable.\* However, if you’re willing to take a trip to the Dark Side, it does offer some interesting add-on possibilities. (That said, Zola’s single-binary, nearly-everything-out-of-the-box approach has served it well and is impressive.) In `package.json`, you’ll find dependencies that make possible the use of [PostCSS](https://postcss.org) and [Tailwind CSS](https://tailwindcss.com). The latter includes the still-in-preview **[@tailwindcss/jit](https://github.com/tailwindlabs/tailwindcss-jit) library**; read more about it in [this announcement](https://blog.tailwindcss.com/just-in-time-the-next-generation-of-tailwind-css).

In addition, there are Zola’s [built-in image processing capabilities](https://www.getzola.org/documentation/content/image-processing/). (The **real** site’s repo uses [Cloudinary](https://cloudinary.com) rather than having the images in the repo and processing them as such.)

## Handling footnotes

Please see `/content/about/index.md` for information concerning how Zola handles footnotes, since this is different than you’ll likely find on other SSGs.

---

\* If you don’t care for dealing with Node.js dependencies, you may be interested in another Zola repo, [zola_solo](https://github.com/brycewray/zola_solo), which offers the same image processing **but** uses [SCSS](https://sass-lang.com/) [through Zola’s built-in SCSS support](https://www.getzola.org/documentation/content/sass/) instead of Tailwind CSS and PostCSS.