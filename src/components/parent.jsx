import { Outlet } from "react-router-dom"


export const Parent = () => {
    return (
        <>
        <h1>
            Parent Element
        </h1>
        <Outlet/>
        </>
    )
}

export const Child = () => {
    return (
        <h1>Child Element</h1>
    )
}