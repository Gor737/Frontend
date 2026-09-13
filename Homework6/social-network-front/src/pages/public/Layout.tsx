import { Outlet } from "react-router-dom"
import { PublicHeader } from "../PublicHeader"

export const Layout = () => {
    return (
        <div>
            <PublicHeader />
            <Outlet />
        </div>
    )
}