#!/bin/bash
HUGO_VERSION=0.46
HUGO_DL=https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_${HUGO_VERSION}_Linux-64bit.tar.gz

curl -fsSL ${HUGO_DL}
tar xvz -C /usr/local/bin

# Go into the site
cd atmanaut
git submodule update

# Build it
hugo -d public
