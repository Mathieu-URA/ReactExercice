import { useLocation, useParams } from "react-router-dom"

export const Details = () => {
    const {id} = useParams()
    const {state} = useLocation()

    return (
        <p>{JSON.stringify(state.data)}</p>
    )
}