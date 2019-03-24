---
title: 'Building Atmanaut: How to Ghostwrite the Web'
date: 2019-02-20 12:06:00 +0000
layout: code
tags: []

---
Delightfully often, when I've combed the web for help designing, developing, and publishing sites, apps, I land on someone's "How I Made This" post on their custom blog. That, or on StackOverflow, or on a Github issue, or increasingly these days on [DEV](dev.to). So this one goes out to all those paid it forward and lent me a hand.

It still feels like nothing short of a miracle to publish a new site. After so many tees dotted (with coffee stains) and eyes crossed through those long nights at the terminal, it's hard to describe the feeling when **It Just Works**™.

In the present case, thanks to a hoard of wunderkinder that open sourced their brilliance, the design, development, and deployment experience on this new site are as good as it gets. **It Just Works™** in such a Teflon-coated Slip 'n' Slide sorta way that I'm elated to pop the hood for you.

![The ShipIt! squirrel gets it.](/img/ship-it-squirrel.jpg)

The squirrel gets it when we ships it.

## TL;DR: The Stack

* [Hugo](https://gohugo.io/about/ "Hugo"), which generates a lightning-fast, theme-able static site with plenty of Go power, a thriving community, and a stellar dev team.
* [Forestry.io](https://forestry.io) for handling content. It's like Minecraft meets Wordpress with a woodsy musk.
* `[now](https://zeit.co/now)`, for no-frills, full-auto deployment/hosting/DNS from the terminal, or straight from the `master` branch to you
* iA Writer - for hipster purity XP, LVL 99. I've been trying out Typora too, but ol' faithful iA really knows how to make me love to write.

Hugo comes with all kinds of built-in goodies. Like syntax highlighting, powered by chromastyles and pygments.

``` js
!function (name, definition) {

  if (typeof module != 'undefined') module.exports = definition()
  else if (typeof define == 'function' && typeof define.amd == 'object') define(definition)
  else this[name] = definition()

}('domready', function () {

  var fns = [], listener
    , doc = typeof document === 'object' && document
    , hack = doc && doc.documentElement.doScroll
    , domContentLoaded = 'DOMContentLoaded'
    , loaded = doc && (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState)


  if (!loaded && doc)
    doc.addEventListener(domContentLoaded, listener = function () {
      doc.removeEventListener(domContentLoaded, listener)
      loaded = 1
      while (listener = fns.shift()) listener()
    })

  return function (fn) {
    loaded ? setTimeout(fn, 0) : fns.push(fn)
  }

});
```

## The moosen haven cometh.

``` sh

 _________________________________
/ wolf, n.:                       \
|                                 |
\ A man who knows all the ankles. /
 ---------------------------------
 \
  \   \_\_    _/_/
   \      \__/
          (oo)\_______
          (__)\       )\/\
               ||----w |
               ||     ||
```

If you pipe fortune into cowsay into lolcat and randomize the cows, you get a pretty amazing command line soothsayer I like to call Kamadhenu. Next version will be AI-powered.

### Here are a few magic spells that make teh codez look nice

``` css
highlight {
  margin: 1em -2em;
  p, span, ul, ol, dl {
    font-family: var(--font-code);
  }
  pre {
    padding: 1rem;
  font-size: 0.8125em;
  }
}

pre, code, samp {
  overflow-wrap: break-word;
  white-space: pre-wrap;
}
```

Hugo also has a great set of pipes.