import React from "react"
import ReactDOM from "react-dom/client"
import "normalize.css"
import "@/assets/css/index.less"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"

import App from "@/App"
import store from "./store"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

{
    /* 懒加载没下载完 js 文件之前，要包裹一层suspense */
}
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)
