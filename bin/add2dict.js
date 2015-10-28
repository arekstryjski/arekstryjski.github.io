#! /usr/bin/env node

"use strict";

const fs = require('fs');
const _ = require('lodash');

const srcDir = '../res/add2dict/';

const today = _([new Date()])
        .map( (d) => `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`)
        .value()[0];

const fileName = (o) => '../dict/' + o.w[0].charAt(0) + '/' + o.w[0].replace(' ', '-') + '.md';

const text = (o) => `---
en: ${o.w[0]}
pl: ${o.w[1]}
layout: dict_word
date: ${today}
cat: ${o.c}
---

<!-- TODO: opis -->

`;

const writeFile = (o) => { 
    fs.writeSync(fs.openSync(o.f, 'wx'), o.s);
    console.log('writing ' + o.f)
};

_(fs.readdirSync(srcDir))
        .map((catFileName) => ({
                 c: catFileName.replace('.md', ''),
                 w: _.trim(fs.readFileSync(srcDir + catFileName, 'utf8'))
             }))
        .filter((o) => o.w.length > 0)
        .map((o) => ({c: o.c, w: o.w.split('\n')}))
        .map((o) => _.map(o.w, (w) => ({c: o.c, w: w})))
        .flatten()
        .map((o) => ({c: o.c, w: o.w.split('-')}))
        .map((o) => ({c: o.c, w: _.map(o.w, _.trim)}))
        .map((o) => ({f: fileName(o), s: text(o)}))
        .forEach(writeFile)
        .value();

