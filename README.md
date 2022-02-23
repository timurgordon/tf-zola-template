# OurWorld Website

## About

A website created using Zola, a static site generator.

- The contents of the pages reside in the markdown files in /content (written in CommmonMark)
- The pages are rendered using HTML templates with Tailwind CSS framework in /templates

## Getting Started

This repository is meant to use as a template for separate projects as well.

To use this repository as a template, simply:

- clone repository
- add your own content to templates directory (see more below)
- [install Zola](https://www.getzola.org/documentation/getting-started/installation/),
- run `npm install` to install dependencies
- run `npm run start`

## How to create pages using this template

### Structure of the content directory

Every index.md file in a content directory corresponds to a page, and the landing page is content/\_index.md.
The path of each page is simply its path relavant to the root of the content directory.

Ex:
content/\_index.md -> yoururl.com/
content/blog/\_index.md -> yoururl.com/blog
content/careers/index.md or content/careers.md -> yoururl.com/careers

### Blog

The blog page is created by default if there is a blog folder in the content directory. The blog page consists of a featured post row, a paginated grid of posts sorted by recency, and a side nav oof post categories and featured posts.

Blog posts can have categories, and can be filtered by said categries. To add a new category simply define the posts category in the yaml header of the blog's index.md file. See /content/blog/2019/01/post-3/index.md for example. The side navigation and category based listing will be automatically updated.

To make a blog post featured, simply add an isFeatured attribute to the yaml header of the blog post. The most recent featured blog post wiill be displayed on the heading row of the blog page, and the rest will be displayed under featured posts in the side nav. See /content/blog/2019/03/post-5/index.md for implementation.

### Creating custom pages

To create your own page, simply create a markdwn file following the examples provided above.
By default, the markdown file will be displayed plainly as it is.

#### Page templates

If you wish to display your markdown files in a specific page template, simply define the template you would like to use in the yaml header of your markdown file. For instance, the blogPage.html template displays blog posts with author info, date, side margins, and a hero image on top oof the post. See any blog page in /content for implementation.

#### Augmented MD

To give website creators freedom in styling without necessitating getting outside of the /content directory and in to the html files, the template has a few features.

- row.html shortcode

Markdown only goes vertical, but this shortcode allows one to add horizontal elements to their web pages. Simply use the {% row() %} {% end %} syntax and place your content in between. The row shortcode can also take a bgPath parameter if you want your row to have a background. (see /content/careers/index.html)

You can create columns in your row by using three vertical bars. ( ||| )
You can fill in your columns with regular markdown, but they can also be empty.

- Image sizing with source paths

You can size your markdown images by adding #small, #medium or #large at the end of the images source url.
See /content/\_index.md for implementation.

### Header & Footer

The header and footer are also created from markdown files in the content directory. In /content/header/\_index.md, each header item is bulleted. If a header item has a row beneath it, the rw will be displayed as a sub-menu on click. Otherwise, if header item is a link, it will simply navigate to the linked page.

The footer, likewise, is structured using the row shortcode. However the left section with page summary is built in. To edit the site destcription, one should edit the description (in the yaml header) of the footer md file. To edit the social links, simply add the social outlets name and your link into the socialLinks dictionary attribute on the yaml header of the footer/\_index.md. If a social icon exists for the social outlet, the link wiill be automatically rendered within the icon, displayed in the footer.

## Resources & References

This project was started using a [Zola Tailwind starter set](https://github.com/brycewray/zola_twcss)
Some templates were created using [Tailwind UI](https://tailwindui.com)
