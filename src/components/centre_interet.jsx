import rome from '../img/romepng.png'
import jeux from '../img/civ.jpg'
import film from '../img/film.jpg'
import musique from '../img/musique.png'

export const Centre_interet = () => {
    return (
        <section className='centre'>
        <h2>Centres d'intérêt</h2>
        <figure class="interet">
        <img src={musique}></img>
            <figcaption>Musique</figcaption>
        </figure>
        <figure class="interet">
        <img src={film}></img>
            <figcaption>Film / Serie / Animé</figcaption>
        </figure>
        <figure class="interet">
        <img src={jeux}></img>
            <figcaption>Jeux vidéos</figcaption>
        </figure>
        <figure class="interet">
        <img src={rome}></img>
            <figcaption>Histoire</figcaption>
        </figure>
        </section>
    )
}