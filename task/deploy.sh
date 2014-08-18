#!/usr/bin/env bash
jekyll build --config=task/production.yml && rsync -avz --delete _site/ web01:/home/cckorea/www/2014con
