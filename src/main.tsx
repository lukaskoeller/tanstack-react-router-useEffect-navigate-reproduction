import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './router.ts'
import { RouterProvider } from '@tanstack/react-router'

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)