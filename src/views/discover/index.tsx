import React, { Suspense, memo } from "react"
import type { FC, ReactNode } from "react"
import { Link, Outlet } from "react-router-dom"

interface IProps {
    children?: ReactNode
}

const Discover: FC<IProps> = () => {
    return (
        <div className="discover">
            <Link to="/discover/recommend">推荐</Link>
            <Link to="/discover/ranking">排行榜</Link>
            <Link to="/discover/songs">歌单</Link>
            <Link to="/discover/djradio">主播电台</Link>
            <Link to="/discover/artist">歌手</Link>
            <Link to="/discover/album">新碟上架</Link>

            {/* 二级路由的占位 */}
            {/* 路由蓝夹杂 */}
            <Suspense fallback="">
                <Outlet></Outlet>
            </Suspense>
        </div>
    )
}

export default memo(Discover)
