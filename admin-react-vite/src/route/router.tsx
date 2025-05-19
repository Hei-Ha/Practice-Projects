import { createBrowserRouter } from 'react-router';
import App from '@src/App';
import { Outlet } from 'react-router';
import Home from '@src/views/home/home';
import TestDemo1 from '@src/views/TestDemo/TestDemo1';
import TestDemo2 from '@src/views/TestDemo/TestDemo2';
import TestDemo3 from '@src/views/TestDemo/TestDemo3';
import TestDemo4 from '@src/views/TestDemo/TestDemo4';
import TestDemo5 from '@src/views/TestDemo/TestDemo5';
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
                    {
                        path: 'testDemo4',
                        element: <TestDemo4 />,
                    },
                    {
                        path: 'testDemo5',
                        element: <TestDemo5 />,
                    },
                ],
            },
        ],
    },
]);

export default router;
