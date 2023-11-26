import Axios from 'axios'
import envConfig  from '/build/env.config'
import { message } from 'antd'
import { Spin } from 'antd'
import ReactDom from "react-dom";
import React from "react";

let loadingCount = 0
const HTTP = Axios.create({
    baseURL: envConfig.baseURL,
    timeout: 5000,
    headers: {'X-Custom-Header': 'foobar '}
})

// 请求拦截器
HTTP.interceptors.request.use((config) => {
    loadingCount = loadingCount + 1
    showLoading()


    // do someting （携带 token）
    return config
})

HTTP.interceptors.response.use((response) => {
    // 2xx 范围内的状态码都会触发该函数。
    loadingCount = loadingCount - 1;
    closeLoading();

    if (response.data.status !== 0) {
        message.error(response.data.errorMsg)
        return
    }
    return response
}, (error) => {
    closeLoading();
    // 超出 2xx 范围的状态码都会触发该函数。
    switch (true) {
        case error.response.status === 400:
            message.error('错误请求！');
            break
        case error.response.status === 401:
            message.error('登陆过期，请重新登录!');
            break
        case error.response.status === 404:
            message.error('请求错误，未找到资源！');
            break
        case error.response.status >= 500:
            message.error('服务端错误');
            break
        default:
            message.error('未知错误！');
    }
})

export const GET = (url: string, params?: object) => {
    return HTTP.get(url, {
        params
    }).then((res) => {
        if (res.status === 200) {
            return res.data
        }
    })
}

export const POST = (url: string, params: object) => {
    return HTTP.post(url, params)
}


const showLoading = () => {
    if (loadingCount > 0) {
        let dom = document.createElement('div')
        dom.setAttribute('id', 'loading')
        document.body.appendChild(dom)
        ReactDom.render(<Spin tip="加载中..." />, dom);
        // ReactDom.createRoot(document.getElementById("root"))
    }
}
const closeLoading = () => {
    if (loadingCount <= 0) {
        document.body.removeChild(document.getElementById('loading'))
    }
    console.log('关闭弹窗')
}