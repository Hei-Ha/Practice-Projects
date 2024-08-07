import fsp from 'fs/promises'
import fs from 'fs'
import path from 'path'
import chalk from 'chalk'
import * as Inquirer from '@inquirer/prompts';
import validateNpmPackageName from 'validate-npm-package-name'
import { CloneRepo } from '../utils/index.js'




const create  = async (appName, option) => {
    const cwd = process.cwd();
    const targetDir = path.join(cwd, appName)  // 获取需要创建文件的目标位置

    const result = validateNpmPackageName(appName);
    if (!result.validForNewPackages) { // 如果 appName 不合规 （npm 包名字规范）
        console.log(chalk.yellow(`Sorry, ${appName} can't be the app name.`))
        console.log(chalk.red(`Error: ${result.errors}`))
        result.errors && result.errors.forEach((item) => {
            console.log(chalk.red(`Error: ${item}`))
        })
        result.warnings && result.warnings(item => {
            console.log(chalk.red(`Warning: ${item}`))
        })
        return
    }
    if (fs.existsSync(targetDir)) { // 如果目标位置已经有同名文件夹
        if (option.force) { // 如果有 -f 参数，则先移除已经存在的目录
            await fsp.rm(targetDir, { recursive: true });
        } else {
            //如果存在同名文件夹，询问用户是否需要覆盖
            const answer = await Inquirer.confirm({ message: 'The target folder already exists. Do you want to overwrite the folder?' });
            if (!answer) {
                console.log(chalk.green('WangCLI has exitd.'));
                return // 如果选择不覆盖已经存在的同名文件夹，则直接推退出
            }
            if (answer) {
                console.log('Remove existing folder...')
                await fsp.rm(targetDir, { recursive: true });
            }
        }
    }
    
    // const dirCreation = await fsp.mkdir(targetDir); // 在指定位置创建文件夹
    
    const frameName = await Inquirer.select({
        message: "请选择模版",
        choices: [
            {
                name: 'vue',
                value: 'vue',
                description: 'vue3 + vite + tailwindcss',
            },
            {
                name: 'react',
                value: 'react',
                description: 'The library for web and native user interfaces',
            },
        ]
    })
    
    if (frameName === 'vue') {
        await CloneRepo('github.com:Hei-Ha/Vue3-template', targetDir)
        // 'direct:https://github.com/Hei-Ha/Vue3-template.git' 直接使用 http url 下载，还未测试
    }
    
    if (frameName === 'react') {
        console.log(chalk.green('还没搭建好，敬请期待...'))
    }
}

export {
    create,
}