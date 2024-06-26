import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
// Import our custom CSS
import '../src/scss/styles.scss'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
