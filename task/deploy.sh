#!/usr/bin/env bash
git checkout master && jekyll build --config=task/production.yml && rsync -avz --delete _site/ web01:/home/cckorea/www/2014con
