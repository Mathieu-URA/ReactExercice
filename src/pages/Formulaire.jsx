import React from "react"
import { useLocation } from "react-router-dom";

export const Formulaire = () => {

    const location = useLocation();
    console.log(location.state)
    
    const [pseudo, setPseudo] = React.useState('')
    const [password, setPassword] = React.useState('')

    const handleSubmit = e => {
        e.preventDefault()
        console.log(pseudo, password)
    }

    return (
        <form>
            <label>Pseudo :
                <input defaultValue = {pseudo} onChange={e => setPseudo(e.target.value)}/>
            </label>
            <label>Password :
                <input type="password" defaultValue = {password} onChange={e => setPassword(e.target.value)}/>
            </label>
            <button type="submit" onClick={handleSubmit}>Envoyer</button>
        </form>
    )
}