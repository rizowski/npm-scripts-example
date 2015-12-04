#!/usr/bin/env node
'use strict';
let child = require('child_process');
let chalk = require('chalk');
let targetBranch = process.argv[2];

let execResult = child.execSync("git symbolic-ref -q --short HEAD").toString();

if(execResult !== targetBranch){
  console.log(chalk.red(`You must be on branch ${chalk.yellow.underline(targetBranch)} but you are on ${chalk.yellow.underline(execResult)}`));
  process.exit(1);
}
