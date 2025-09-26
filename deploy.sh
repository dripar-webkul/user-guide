#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd .vitepress/dist

# set custom domain
echo 'docs.unopim.com' > CNAME

# push to GitHub Pages
git init
git add -A
git commit -m 'chore: deploy docs to GitHub'
git push -f git@github.com:unopim/user-guide.git master:gh-pages

cd -
