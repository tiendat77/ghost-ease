# Ease

A versatile [Ghost](https://github.com/TryGhost/Ghost) theme suitable for documentation. Publish your posts or business information with ease.

**Demo: https://ease.ghost.io**

# Instructions

1. [Download this theme](https://github.com/TryGhost/Ease/archive/main.zip)
2. Log into Ghost, and go to the `Design` settings area to upload the zip file


# Development

## Theme structure

The main files are:

- [`default.hbs`](default.hbs) - The main template file
- [`index.hbs`](index.hbs) - Used for the home page
- [`post.hbs`](post.hbs) - Used for individual posts
- [`page.hbs`](page.hbs) - Used for individual pages
- [`tag.hbs`](tag.hbs) - Used for tag archives
- [`author.hbs`](author.hbs) - Used for author archives

One neat trick is that you can also create custom one-off templates just by adding the slug of a page to a template file. For example:

- `page-about.hbs` - Custom template for the `/about/` page
- `tag-news.hbs` - Custom template for `/tag/news/` archive
- `author-jamie.hbs` - Custom template for `/author/jamie/` archive

&nbsp;

## Setup

You'll need the Ghost CLI installed.

```
npm install ghost-cli@latest -g
```

Then install Ghost locally.

```
ghost install local
```

To see realtime changes during development, symlink the Ease theme folder to the `content/themes` folder in your local Ghost install.

```bash
ln -s /workspaces/ghost/ease /workspaces/ghost/ghost-instance/content/themes/ease
```

Restart Ghost and select the Ease theme from **Settings**.

&nbsp;

## Build, zip, and test your theme

Styles are compiled using Gulp/PostCSS to polyfill future CSS spec. You'll need [Node](https://nodejs.org/), [Yarn](https://yarnpkg.com/) and [Gulp](https://gulpjs.com) installed globally. After that, from the theme's root directory:

```bash
# Install
yarn

# Run build & watch for changes
yarn dev
```

Now you can edit `/assets/css/` files, which will be compiled to `/assets/built/` automatically.

The `zip` Gulp task packages the theme files into `dist/ease.zip`, which you can then upload to your site.

```bash
yarn zip
```

&nbsp;

# Contribution

This repo is synced automatically with [TryGhost/Themes](https://github.com/TryGhost/Themes) monorepo. If you're looking to contribute or raise an issue, head over to the main repository [TryGhost/Themes](https://github.com/TryGhost/Themes) where our official themes are developed.

# Copyright & License

Copyright (c) 2013-2023 Ghost Foundation - Released under the [MIT license](LICENSE).
