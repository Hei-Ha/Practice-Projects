import { createBrowserRouter } from 'react-router'
import App from '@src/App'
import Home from '@src/pages/home/home'
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/home',
                element: <Home />,
            },
        ],
    },


])

export default router