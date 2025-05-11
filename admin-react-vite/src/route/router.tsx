import { createBrowserRouter } from 'react-router'
import App from '../App'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/login',
        // element: <Login />,
    }
])

export default router