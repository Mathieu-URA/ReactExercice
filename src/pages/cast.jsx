import React from "react"
import { useParams } from "react-router-dom"

export const Cast = () => {
    const {id} = useParams()
    const [data, setData] = React.useState([])
    const [season, setSeason] = React.useState([])


       React.useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${id}?embed=cast`).then(res => res.json()).then(data => setData(data)).catch(err => console.log(err))
        console.log(data)
        fetch(`https://api.tvmaze.com/shows/${id}/seasons`).then(res => res.json()).then(season => setSeason(season)).catch(err => console.log(err))
    }, [])
    
    
    return(
        <div>
            
            <h1>{data.name}</h1>
            <img src={data.image?.medium}></img>
            <p>{data.summary}</p>
            <p>_______________________________________</p>
            <h1>Cast :</h1>
            {data?._embedded?.cast?.map((cast) => {
                return(
                <div key={cast.person.id}>
                    <h2>Nom acteur : {cast.person?.name}</h2>
                    <h2>Nom personnage : {cast.character?.name}</h2>
                    <img src={cast.person?.image?.medium}></img>
                    <p>_______________________________________</p>
                
                </div>
            )})}
                <h2>Saisons :</h2>
                {season?.map((season) => {
                    return(
                        <div key={season.id}>
                                <img src={season.image?.medium}></img>
                        </div>
                )})}

        </div>
        
    )
}