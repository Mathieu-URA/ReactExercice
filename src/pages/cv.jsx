import { Centre_interet } from '../components/centre_interet'
import { Experiences } from '../components/experiences'
import { Formations } from '../components/formations'
import { Header } from '../components/header'
import { Informations } from '../components/informations'
import '../style/style.css'


export const Cv = () => {
    return (
        <>
        <Header/>
        <div className='main'>
            <Informations/>
            <Experiences/>
            <Formations/>
            <Centre_interet/>
        </div>
        
        </>
        
    )
}