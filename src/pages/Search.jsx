import React from "react"
import { useNavigate } from "react-router-dom";
import notfound from '../img/imgNotFound.png'


export const Search = (url) => {

    const navigate = useNavigate();
    const [data, setData] = React.useState([])
   
    const [Serie, setSerie] = React.useState('')


    const afficher = e => {
        e.preventDefault()
        fetch(`https://api.tvmaze.com/search/shows?q=${Serie}`).then(res => res.json()).then(data => setData(data)).catch(err => console.log(err))
        
    }
    

    const cast = id => {
        console.log(id)
        navigate(`/cast/${id}`)

    }

   

    return (
        
        <>
        
        <h1>Recherche de série</h1>

        <input defaultValue = {Serie} onChange={e => setSerie(e.target.value)}/>
        <button type="submit" onClick={afficher}>Envoyer</button>
        <p>_______________________________________</p>
        {data?.map(({show}) => {
            console.log(show)
            return(
            <div key={show.id}>
                <h1>{show.name}</h1>
                
                <img src={show.image?.medium || notfound} onClick={() => cast(show.id)}></img>
                <p>Synopsis : {show.summary}</p>
                <p>Genre : {show.genres.map((genre) => {
                    return(
                        <p key={genre}> {genre} </p>
                    )
                })} </p>
                <p>Note : {show.rating.average}</p>

            </div>
        )})}
        {/*<p>{JSON.stringify(data)}</p>*/}
        


        

        </>
        
    )
}