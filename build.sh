#!/bin/bash
export HUGO_BIN_BUILD_TAGS="extended"
npm install hugo-bin
git clone https://github.com/krry/chakra-hugo-theme.git themes/chakra
hugo -d public
