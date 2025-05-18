import { createBrowserRouter } from 'react-router'
import App from '@src/App'
import {Outlet} from "react-router";
import Home from '@src/views/home/home'
import TestDemo1 from '@src/views/TestDemo/TestDemo1'
import TestDemo2 from '@src/views/TestDemo/TestDemo2'
import TestDemo3 from '@src/views/TestDemo/TestDemo3'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/home',
                element: <Home />,
            },
            {
                path: '/test',
                element: <Outlet />,
                children: [
                    {
                        path: 'testDemo1',
                        element: <TestDemo1 />,
                    },
                    {
                        path: 'testDemo2',
                        element: <TestDemo2 />,
                    },
                    {
                        path: 'testDemo3',
                        element: <TestDemo3 />,
                    },
                ],
            },
        ],
    },


])

export default router