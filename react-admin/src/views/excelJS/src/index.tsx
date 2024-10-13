// @ts-nocheck
import React from 'react'
import { Button } from 'antd'
import { imageListPage1, imageListPage2, imageListPage3, imageListPage4, imageListPage5 } from './constants'
import ExcelJS from 'exceljs'
import fs from 'fs'

export default () => {
    const handleGetImage = async () => {
        initExcelJS()
    }
    
    
    
    const initExcelJS = async () => {
        const AllImageList = imageListPage1.concat([...imageListPage2, ...imageListPage3, ...imageListPage4, ...imageListPage5])
        const workbook = new ExcelJS.Workbook() // 创建工作薄
        workbook.creator = 'heiha'
        workbook.lastModifiedBy = 'heiha'
        workbook.created = new Date(2024, 10, 13)
        workbook.modified = new Date()
        workbook.views = [
            {
                x: 0,
                y: 0,
                width: 100000,
                height: 200000,
                firstSheet: 0,
                activeTab: 0,
                visibility: 'visible'
            }
        ] // 工作薄试图： 控制打开工作薄时，excel 将打开多少个独立的窗口
        // 添加工作表
        const worksheet = workbook.addWorksheet('My Sheet', {
            pageSetup:{ fitToPage: true, fitToHeight: 5, fitToWidth: 7 }
        })
        worksheet.properties.defaultRowHeight = 100
        worksheet.properties.defaultColWidth = 50
        
        const columns = ['image'].concat(Object.keys(AllImageList[0])) // 取出所有表头
        console.log(columns)
        worksheet.columns = columns.map(item => ({
            header: item,
            key: item,
        }))
        let rowValue = [] // 向 excel 写入 行 内容
        for (let i = 0; i < AllImageList.length; i++) {
            rowValue.push(columns.map(item => {
                return AllImageList[i][item] || ''
            }))
        }
        worksheet.addRows(rowValue, 'i')
        // worksheet.columns = [
        //     { header: 'Id', key: 'id', width: 10 },
        //     { header: 'url', key: 'url', width: 100 },
        //     { header: 'photographer', key: 'photographer', width: 50 },
        //     { header: 'image', key: 'image', width: 30 }
        // ]
        // const rows = [
        //     { id: 1, url: 'firet', photographer: 'qqq'},
        //     { id: 2, url: 'second', photographer: 'www'},
        //     [3, 'third', 'eee']
        // ]
        // 向单元格插入图片
        // const imgBufferList = await Promise.allSettled(imageListPage1.map(item => {
        //     return fetch(imageListPage1[0].src.tiny).then(res => res.blob())
        // }))
        //
        // const imageValueList = imgBufferList.map(item => {
        //     return workbook.addImage({
        //         buffer: item.arrayBuffer(),
        //         extension: 'jpeg',
        //     })
        // })
        
        // image blob to base64
        const getImgBase64 = (blob) => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader()
                reader.onloadend = () => resolve(reader.result)
                reader.onerror = (err) => reject(err)
                reader.readAsDataURL(blob)
            }).catch(() => {
                return ''
            })
        }
        
        for (let i = 0; i < AllImageList.length; i++) {
            let imgBlob = await fetch(AllImageList[i].src.tiny).then(res => res.blob())
            let imgBase64 = await getImgBase64(imgBlob)
            
            let imgValue = workbook.addImage({
                // buffer: await imgBlob.arrayBuffer(),
                base64: imgBase64,
                extension: 'jpeg'
            })
            worksheet.addImage(imgValue, {
                tl: { col: 0, row: i + 1},  // 图片锚定到 D2（列从0开始计数）
                ext: { width: 100, height: 100 }  // 设置图片大小
            })
        }
        
        // return
        
        workbook.xlsx.writeBuffer()
            .then(async (buffer) => {
                const blob = new Blob([buffer], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'})
                const a = document.createElement('a')
                a.href = URL.createObjectURL(blob)
                a.download = 'hahah.xlsx'
                a.click()
            })
    }
    
    return <>
        <p>纯前端使用 ExcelJS 导出 Excel 文件</p>
        <Button onClick={() => { handleGetImage() }}>请求图片资源</Button>
    </>
}