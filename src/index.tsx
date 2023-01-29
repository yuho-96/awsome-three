/*
 * @Author: liuyuhao
 * @Date: 2023-01-28 15:06:21
 * @LastEditors: liuyuhao
 * @LastEditTime: 2023-01-29 16:08:52
 * @Description:
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import Home from './pages/home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/home',
    element: <Home />,
  },
])

function updater() {
  fetch('/').then(res =>
    res.text().then(r => {
      const reg = new RegExp(/<script(?:\s+[^>]*)?>(.*?)<\/script\s*>/gi) //script正则
      //匹配script标签
      console.log('updater: ', r.match(reg) as string[])
    })
  ) //读取index html
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

updater()
