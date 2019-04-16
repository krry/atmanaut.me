---
date: 2019-04-16 02:41:47 +0000
title: Create a Preact-on-Parcel SPA in a Jiffy
tags:
- front-end
- devsign
- stacklife
title_main: Create a Preact-on-Parcel SPA in a Jiffy
subtitle: Lightning fast, featherweight, whip-smart front-end wapping
title_lead: Alec, pour us a stout. It's record-breaking time.
categories:
- code

---
_Earthdate 2019.04.15.21.41.32.745._

**Tax Day.**

I don't have a lot of time before the IRS knocks down the door to take me away, so we'll make this quick. And I've got to knock this wapp out before I go-go.

React would be the jelly and/or jam, but I don't have the time, the money, or the inclination to abide the bloat. Nor can I risk being caught hand-ankled and grunting my way thru a `webpack.config.js` No, no, no. I want the paper airplane of dev frameworks. I want to sneeze and have a fully-featured web app to dev on.

[Preact](https://preactjs.com) does much of what React can do with only 3kb of ugly gzip. [Parcel](https://parceljs.org) is a zero-config bundler/builder that smells like `webpack` but tastes (and works) like **Wonka**. After we get the engine running, we'll think about a turbo.

#### 1. First, we draw a blank... dir.

``` shell
mkdir -p preact-parcel-app/src	# -p flag makes necessary parents
cd preact-parcel-app
```

#### 2. I like to let `yarn` initialize the dir.

``` shell
yarn init -y   					# -y flag says 'yes' to questions
```

#### 3. Then have `yarn` install our slim dependencies.

``` shell
yarn add -D parcel-bundler		# -D flag to --save-dev
yarn add preact preact-compat   # as in compat with react
```

#### 4. Now we add a `dev` command to the `package.json`.

``` json
{
  "scripts": {
    "dev": parcel src/index.html --open"
  }
}
```

At this point, if you're following along, you may realize you could just be cloning \[the Preact Parcel starter kit repo\] and renaming it to be your own. If instead you're the defiant DIY type, type on.

#### 5. Next we make an entry point for `parcel` in `src/index.html`

``` html
<!-- src/index.html -->
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Preparcelact</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="./index.js"></script>
  </body>
</html>
```

#### 6. Now we need to mount the Preact app.

``` js
// src/index.js
import { h, render } from 'preact';
import App from './App';

const mountNode = document.getElementById('app');
render(<App/>, mountNode, mountNode.lastChild);
```

#### 7. Then we'll need an App Component.

``` jsx
/* src/App.jsx */
import { h, Component } from "preact";
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Preact-on-Parcel</h1>
        <p>Triumphant!</p>
      </div>
    )
  }
}
```

#### 8. Lastly a few styles to make it clear that it worked.

``` css
/* src/App.css */
body {
  margin: 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  font-family: "Fantasque Sans Mono", system-ui, sans-serif;
  background-color: hsl(260, 48%, 22%);
  color: hsl(260, 56%, 84%);
}
```

#### 9. P-o-P it off!

    yarn dev

### What dreams may come!

Parcel can handle all manner of assets. It sits in wait, ready to automagically install dependencies when you start using them. There are a bunch of bundles and build features that Parcel can sniff out from a runcom or config file. Try adding some more, like:

* `.postcssrc` / `postcss.config.js`
* `.browserslistrc`
* `.babelrc`

The cool part about these little runcoms is how portable they are. Just copy and drop them into a new project. For instance, [let's say you want to autoprefix your css](https://parceljs.org/css.html). Just add autoprefixer settings to a runcom for PostCSS: `.postcssrc` or `postcss.config.js` will work.

``` json
{
  "modules": true,
  "plugins": {
    "autoprefixer": {
      "grid": true
    }
  }
}
```

Save that file. You may have to stop and restart parcel, you may not. The other way to add features to the Parcel build is via `yarn`/`npm`. So [if you want to write your styles in Sass](https://parceljs.org/scss.html), there's a one-liner for that:

``` shell
yarn add -D sass
```

Well, that's it. Check the docs for [Parcel](https://parceljs.org/getting_started.html) and [Preact](https://preactjs.com/guide/getting-started) for more. Thanks for playing. Hope your refund was hefty _af_.

### If you thought that was fun…

I don't know what to tell you. Try downhill underwater lexicography? Or antarctic vegetable taxidermy? It doesn't get much more exciting.

I enjoyed reading [the AMA that Preact's author Jason Miller did](https://jasonformat.com/preact-ama-on-sideway/).

If you have any Parcel tips, please leave them here in the Comments. So much to flesh and figure out, lots of potential!