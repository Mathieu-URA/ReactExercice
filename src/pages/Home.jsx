import React from "react";
import { Link } from "react-router-dom";
import { Effect } from "./Effect";
import { Formulaire } from "./Formulaire";

export const Home = () => {

    const [count, setCount] = React.useState(0);

    const update= (nb) => {
        setCount(prev => prev + nb);     
    }

    return ( 
    <>
        <h1>Hello World !</h1>
        <button onClick={() => update(-1)}>-</button>
        <p>{count}</p>
        <button onClick={() => update(1)}>+</button>
        <Link to = {'formulaire'} state={{from : 'state'}}>formulaire</Link>
    </>      
    )
}