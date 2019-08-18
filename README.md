<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://user-images.githubusercontent.com/21126965/63229208-ba7a6600-c21b-11e9-9bc5-3317bf3c90d1.png" width="60" />
  </a>
</p>
<h1 align="center">
  The Gatsby Theme Unicorn
</h1>

A Gatsby theme for creating a blog with awesome typography.

## Installation

### Use the blog theme starter

This will generate a new site that pre-configures use of the blog theme.

```sh
gatsby new my-blog https://github.com/mohanmonu777/gatsby_theme_unicorn
```

### Manually add to your site

```sh
npm install --save gatsby_theme_unicorn
```

## Usage

### Theme options

| Key           | Default value    | Description                                                                                               |
| ------------- | ---------------- | --------------------------------------------------------------------------------------------------------- |
| `basePath`    | `/`              | Root url for all blog posts                                                                               |
| `contentPath` | `content/posts`  | Location of blog posts                                                                                    |
| `assetPath`   | `content/assets` | Location of assets                                                                                        |
| `mdx`         | `true`           | Configure `gatsby-plugin-mdx` (if your website already is using the plugin pass `false` to turn this off) |

#### Example usage

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby_theme_unicorn`,
      options: {
        // basePath defaults to `/`
        basePath: `/blog`,
      },
    },
  ],
}
```

### Additional configuration

In addition to the theme options, there are a handful of items you can customize via the `siteMetadata` object in your site's `gatsby-config.js`

```js
// gatsby-config.js
module.exports = {
  siteMetadata: {
    // Used for the site title and SEO
    title: `Gatsby Theme Unicorn`,
    // Used to provide alt text for your avatar
    author: `@mohan.tech`,
    // Used for SEO
    description: `My site description...`,
    // Used for social links in the root footer
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/MrNullPointer`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/mohanmonu777`,
      },
    ],
  },
}
```