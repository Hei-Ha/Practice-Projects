import { createBrowserRouter } from 'react-router'
import App from '@src/App'
import {Outlet} from "react-router";
import Home from '@src/views/home/home'
import TestDemo1 from '@src/views/TestDemo/TestDemo1'

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
                ],
            },
        ],
    },


])

export default router