# LUME DARK MATERIAL :black_large_square: :fire:

[![LUME CI](https://github.com/angeldollface/lume-dark-material/actions/workflows/main.yml/badge.svg)](https://github.com/angeldollface/lume-dark-material/actions/workflows/main.yml)

***A simple material-design inspired theme for the Lume SSG. :black_large_square: :fire:***

## ABOUT :books:

Since I'm a huge fan of [Lume](https://github.com/lumeland/lume), I thought I'd help out [@oscarotero](https://github.com/oscarotero) and add a theme for Lume. In case you are wondering what Lume is: Lume generates a static site from a set of templates and Markdown files. This repository contains a pre-fabricated set of templates, layouts, and styles to make the job easier of getting your personal blog or site up and running as fast as possible.

## USAGE :hammer:

You should have the following tools installed and available from the command line:

- [Deno](https://deno.land)
- [Git](https://git-scm.org)

To build and serve this blog on your own machine, follow these steps:

- 1.) Clone this project's source code:

```bash
git clone https://github.com/angeldollface/lume-dark-material/
```

- 2.) Change directory into the source code's root directory:

```bash
cd lume-dark-material
```

- 3.) Serve the built static site on `localhost`:

```bash
deno task serve
```

- 4.) If you want to compile this blog, use this command:

```bash
deno task build
```

- 5.) Further customization:
    - Site data can be found in `_data/site.json` for site-wide variables.
    - Navigation links can be found in `_data/naviagtion.json`.
    - Colors and fonts can be customized in `css/index.scss`.
    - The content pages can be found in the `content` directory.
    - Any blog posts need to be stored in the `posts` directory.
    - If you have any further questions or problems, open an issue. :heart_on_fire:

- 6.) You can view a live, deployed version of this site [here](https://angeldollface.art/lume-dark-material).

## CHANGELOG :black_nib:

### Version 1.0.0

- Initial release.
- Upload to GitHub.
- Deployment to GitHub Pages.

## NOTE :scroll:

- *Lume Dark Material :black_large_square: :fire:* by Alexander Abraham :black_heart: a.k.a. *"Angel Dollface" :dolls: :ribbon:*
- Licensed under the MIT license.
