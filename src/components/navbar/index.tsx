import React, { memo } from "react"
import type { FC, ReactNode } from "react"
import { Link } from "react-router-dom"

interface IProps {
    children?: ReactNode
}

const Navbar: FC<IProps> = () => {
    return (
        <div className="navbar">
            <Link to="/discover">发现音乐</Link>
            <Link to="/mine">我的音乐</Link>
            <Link to="/focus">我的关注</Link>
            <Link to="/download">下载客户端</Link>
        </div>
    )
}

export default memo(Navbar)
