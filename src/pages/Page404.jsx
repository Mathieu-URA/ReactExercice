import { useParams } from "react-router-dom"

export const Page404 = () => {

    const {pages} = useParams()
    return (
        <h1>ERROR 404 !! le chemin {pages} n'existe pas</h1>
    )
}