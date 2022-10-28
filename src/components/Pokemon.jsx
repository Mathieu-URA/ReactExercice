import React from "react"
import { Link } from "react-router-dom"


export const Pokemon = ({url}) => {
    const [data, setData] = React.useState({})

    React.useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(p => setData(p))
        .catch(err => console.error(err))
    }, [])

    return (
        <div>
        {data &&
            <>
            {console.log(data)}

            <h2><Link to = {`/pokemons/${data.id}`} state={{data}}>{data.name}</Link></h2>
            
            <p>compétences : {data.abilities?.[0]?.ability?.name} / {data.abilities?.[1]?.ability?.name}</p>
            <img src = {data.sprites?.front_default}></img>
            </>
        }
        </div>
    )
}