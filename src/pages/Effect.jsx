import React from "react";
import { Pokemon } from "../components/Pokemon";



export const Effect = ({count}) => {
    const [pokemons, setPokemons] = React.useState([]) 
    React.useEffect(() => {


        fetch('https://pokeapi.co/api/v2/pokemon').then(res => res.json()).then(data => setPokemons(data.results)).catch(err => console.log(err))
    }, [count])

    return (
    <>
        <h1> Exemple useEffect</h1>
        {pokemons.map((p, index) => <Pokemon key={index} url={p.url}/>)}
    </>
    )

}