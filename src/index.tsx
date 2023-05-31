import React from "react"
import ReactDOM from "react-dom/client"
import "normalize.css"
import "@/assets/css/index.less"
import { BrowserRouter } from "react-router-dom"

import App from "@/App"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

{
    /* 懒加载没下载完 js 文件之前，要包裹一层suspense */
}
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
