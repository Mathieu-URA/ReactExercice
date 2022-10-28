import React from "react"
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom"


export const Layout = ({connected, name}) => {
    const location = useLocation()
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(-1)
    }
    console.log(location)
//    const navigate = useNavigate()

//    React.useEffect(() => {
//        if(!connected) navigate('login')
//    }, [])

    return (
        connected ?
        <>
        <h1>
            Layout
        </h1>
        <p>Welcome {name} !</p>
        <Outlet/>
        <button onClick={handleClick}></button>
        </>
        :
        <Navigate to='LoginPage'/>
    )
}



