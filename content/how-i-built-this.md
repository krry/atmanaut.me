---
title: How I Built This Site
date: 2019-02-09T16:50:57-06:00
layout: code
tags: [code, hugo, dev, guide]
---

Delightfully often, when I've combed the web for help designing, developing, and publishing sites, apps, I land on someone's "How I Made This" post on their custom blog. That, or on StackOverflow, or on a Github issue, or increasingly these days on [DEV](dev.to). So this one goes out to all those paid it forward and lent me a hand.

It still feels like nothing short of a miracle to publish a new site. After so many tees dotted (with coffee stains) and eyes crossed from long nights at the terminal, it's hard to describe the feeling when **It Just Works**™. In the present case, almost every step of the development and deployment process just works in such a Teflon-coated Slip 'n' Slide sorta way that I'm elated to pop the hood for you.

![The ShipIt! squirrel gets it.](/img/ship-it-squirrel.jpg)

## TL;DR

### The Stack a.k.a. [BuiltWith](https://builtwith.com/atmanaut.us)
- Hugo, generating a lightning-fast, theme-able static site with Go power
- [`now`](zeit.com/now), for no-frills, full-auto deployment/hosting/DNS from the terminal
- vim + tmux + oh-my-zsh, for memorizing shitloads of keybindings and then magic
- IA Writer - for hipster purity XP, LVL 99, and 'cos vim is a harsh mistress

## Some code, highlighted with PrismJS
{{< highlight js >}}
// allow :active styles to work in CSS on mobile safari
document.addEventListener("touchstart", function(){}, true);

domready(function () {
  console.info('DOM is in the browser.');
  var menuTrigger = document.querySelector('#menu_trigger');

  menuTrigger.addEventListener('click', function(){
    menuTrigger.classList.toggle('triggered');
    document.querySelector('#menu').classList.toggle('shown');
});

  window.addEventListener('keydown', handleFirstTab);
});

function handleFirstTab(e) {
  if (e.keyCode === 9) { // the "I am a keyboard user" key
    document.body.classList.add('user-is-tabbing');
    window.removeEventListener('keydown', handleFirstTab);
  }
}
{{< /highlight >}}

## The moosen haveth cometh.
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
### Here are the magic spells that make codes look nice
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

