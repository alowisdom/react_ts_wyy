import React, { Suspense } from "react"
import { useRoutes } from "react-router-dom"
import routes from "./router"

import Navbar from "./components/navbar"

function App() {
    return (
        <div className="app">
            {/* Navbar */}
            <Navbar></Navbar>

            {/* 占位 */}
            {/* 懒加载没下载完 js 文件之前，要包裹一层suspense */}
            <Suspense fallback=" ">
                <div>{useRoutes(routes)}</div>
            </Suspense>
        </div>
    )
}

export default App
