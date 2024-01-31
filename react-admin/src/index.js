import { createRoot } from 'react-dom/client';
import React from 'react'
import { App } from './App.tsx'
import 'antd/dist/reset.css'
import './index.less'
import './utils/utils.less'
import "tailwindcss/tailwind.css"

createRoot(document.getElementById('root')).render(<App />)

