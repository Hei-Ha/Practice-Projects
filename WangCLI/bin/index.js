#! /usr/bin/env node
import { createRequire } from 'module'
// import packageMsg from '../package.json' assert { type: 'json'}
import { Command } from 'commander'
import { create } from '../lib/create.js'
import chalk from 'chalk' // 给命令行文字添加颜色
import minimist from 'minimist'


const PJSON = createRequire(import.meta.url)("../package.json");



const program = new Command();
program
    .version(`${PJSON.version}`, '-v, --version', 'Output the current version')
    .usage('<command> [options]')


program
    .command('create <app-name>')
    .description('Create new project powered by WangCLI')
    .option('-f, --force', 'Overwrite target directory if it exists')
    .action((appName, option, command) => {
        if (minimist(process.argv.slice(3))._.length > 0) {
            chalk.yellow('Info: You provided more than one argument. Only the first argument will be used as the app name')
        }
        create(appName, option);
    })


program.showHelpAfterError('add --help for additional information'); // 出错提示信息

program.parse()