import React from 'react'
import { createRoot } from 'react-dom/client'
import './style/global.css'
import router from './route/router'
import { RouterProvider } from 'react-router'


const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(<RouterProvider router={router} />)




