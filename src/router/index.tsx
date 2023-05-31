import React from "react"
import type { RouteObject } from "react-router-dom"
import { Navigate } from "react-router-dom"
// 没有懒加载
import Discover from "@/views/discover"

const Mine = React.lazy(() => import("../views/mine"))
const Focus = React.lazy(() => import("../views/focus"))
const Download = React.lazy(() => import("../views/download"))

const Album = React.lazy(() => import("../views/discover/child_views/album"))
const Artist = React.lazy(() => import("../views/discover/child_views/artist"))
const Djradio = React.lazy(() => import("../views/discover/child_views/djradio"))
const Ranking = React.lazy(() => import("../views/discover/child_views/ranking"))
const Recommend = React.lazy(() => import("../views/discover/child_views/recommend"))
const Songs = React.lazy(() => import("../views/discover/child_views/songs"))

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Navigate to="/discover"></Navigate>
    },
    {
        path: "/discover",
        element: <Discover />,
        children: [
            {
                path: "/discover",
                element: <Navigate to="/discover/recommend"></Navigate>
            },
            {
                path: "/discover/album",
                element: <Album></Album>
            },
            {
                path: "/discover/artist",
                element: <Artist></Artist>
            },
            {
                path: "/discover/djradio",
                element: <Djradio></Djradio>
            },
            {
                path: "/discover/ranking",
                element: <Ranking></Ranking>
            },
            {
                path: "/discover/recommend",
                element: <Recommend></Recommend>
            },
            {
                path: "/discover/songs",
                element: <Songs></Songs>
            }
        ]
    },
    {
        path: "/mine",
        element: <Mine></Mine>
    },
    {
        path: "/download",
        element: <Download />
    },
    {
        path: "/focus",
        element: <Focus />
    }
]

export default routes
