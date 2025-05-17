import React from 'react'
import { createRoot } from 'react-dom/client'
import router from './route/router'
import { RouterProvider } from 'react-router'
import './style/global.css'




const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(<RouterProvider router={router} />)




