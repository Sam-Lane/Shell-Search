#!/usr/bin/env node

const SearchShell = require('../src/index');

let search = new SearchShell.ShellSearch();

searchQuery = process.argv.slice(2);

search.search(search.buildQuery(searchQuery));