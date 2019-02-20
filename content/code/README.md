---
title: README
date: 2019-02-02 08:22:22 +0000

---
# Atmanaut

Spelunk the essential.

### This is:

A hugo-powered static site using the chakra theme, ready to link up with a
Forestry.io CMS, and auto-deployable on now.sh.

## TODO

* \[ \] scour hugo docs and try out features
* \[ \] load fonts with app, not from Google Fonts
* \[x\] refresh color palette: chakras, soulstones
* \[x\] refactor sass to css with postcss
* \[x\] make layout mobile friendly
* \[x\] debug auto-deploy with Forestry and now+github
* \[x\] structure metadata for tags in archetypes
* \[x\] flesh out tagging system for asidebar and posts
* \[x\] learn how to direct link to other posts; document below
* \[x\] style summaries: timestamps, titles, etc.
* \[x\] add routes to `now.json` to enable Github master push deploy
  * move `now.json` back to root
  * change npm scripts to work with new build config
* \[x\] add logo and brand

### To Consider

* \[ \] es6 support, babel, webpack, etc.
* \[ \] annotation lane for links and sidenotes (a la footnotes)

## Workflow

This static site employs the chakra-hugo-theme as a submodule. So generally the layouts, styles, and functionality come from the theme and are to be maintained therein. Content rests in this repo, and is updatable via the [Forestry.io]() CMS. The CMS auto-deploys the site when new content is saved. By deploying with `now+github` we are able to automate a lot of steps in the composing/publishing process.`now` uses my custom build script to rebuild the site with any updates, then aliases the deployment (when successful) to [Atmanaut.us]() and [Atmanaut.me]().

Tags are required front matter for posts. To catalog sources for a given tag topic, make a file at `/tags/tag_name/_index.md` with the titles and links to the sources in the front matter. There is an archetype called `tags.md` that will give you the syntax.

## Tagging, Categories, and Taxonomies

Hugo provides two [default taxonomies](https://gohugo.io/content-management/taxonomies/#default-taxonomies): tags and categories. Additional taxonomies can be added in the `config.yaml` like so:

``` yaml
taxonomies:
  example: examples
  thing: things
```

Then you can use it in `YAML` front matter like so:

``` md
---
title: An article por ejemplo
things: bunnicula, flying saucers
tags: punishment, acrobatics
---
```

Each taxonomies type gets its own page (e.g. `/categories`, `/tags`) and each term in the taxonomy gets a page listing all its members (e.g., `/tags/horsenames`).

## Linking

Hugo provides `relURL` and `absURL` for your linking needs. These power `.RelPermalink` and `.Permalink` respectively.

Use .RelPermalink when you might alter the locations of the `publicDir` or `contentDir`, or restructure the dynamically generated `[permalinks]` in the site `config.toml`.

Use .Permalink when the file won't move, or for external purposes, such as sharing and for post title links.

External links are given target=_blank thanks to the `BlackFriday` markdown
compiler. In the `config.yaml`, mark `hrefTargetBlank` and `plainIDAnchors`
true.

For internal links, use the standard markdown link syntax or a reference link.
``` md
[This is a standard link](/code/README/)
[And this is a reference link][reflink]

[reflink]: /code/README/
```
## 
