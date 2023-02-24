import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes'
import { RecoilRoot } from 'recoil'
import RecoilNexus from 'recoil-nexus'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <RecoilNexus />
      <RouterProvider router={routes}></RouterProvider>
    </RecoilRoot>
  </React.StrictMode>,
)
