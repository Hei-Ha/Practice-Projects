import React from "react";
import { Home } from "@/views/home/src/home";
import { filterPermissions } from '@/utils/utils'

const routerModules = require.context('../', true, /^\.\/(pages|views)(\/[\w.-]+)?\/router.(js|ts|tsx)$/)

const routers = ((r) => {
    return r.keys().map(k => r(k).default)
})(routerModules)

const routerConfig = [
    {
        name: 'home',
        path: '/',
        element: <Home />,
        children: []
    }
]


const res = filterPermissions([].concat(...routers))

// console.log('router', routerConfig.concat(res))

export default routerConfig.concat(res)