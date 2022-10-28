import kosmara from '../img/kosmara.png'
import timac from '../img/timac-agro.jpg'
import edf from '../img/edf.png'

export const Experiences = () => {
    return (
        <section>
        <h2>Expériences professionnelles</h2>
        <div class="exp">
            <div class="exp-logo">
            <img src={kosmara}></img>
            </div>
            <div class="exp-info">
                <h3>Stage Développeur</h3>
                <h4>Kosmara</h4>
                <h4>05-06/2021</h4>
            </div>
            <div class="exp-desc">
                <p>Création d'un jeu vidéo type RPG sur Unity. Les scripts ont été dévellopé en c# et les object 3d modélisé avec blender. La version alpha du jeu comporte une quête ou un personage doit trouver un objet et le rapporter a son propriétaire.</p>
            </div>
        </div>
        <div class="exp">
            <div class="exp-logo">
            <img src={timac}></img>
            </div>
            <div class="exp-info">
                <h3>Annimateur sécurité</h3>
                <h4>Timac Agro</h4>
                <h4>2015 - 2016</h4>
            </div>
            <div class="exp-desc">
                <p>Chargé de la mise en conformité du parc machine de l'usine, chagé de sensibilisé au bonne pratique securité. </p>
            </div>
        </div>
        <div class="exp">
            <div class="exp-logo">
            <img src={edf}></img>
            </div>
            <div class="exp-info">
                <h3>Chargé d'affaires</h3>
                <h4>EDF</h4>
                <h4>04-06/2015</h4>
            </div>
            <div class="exp-desc">
                <p>Chargé de la renovation des pompes eau de mer de l'usine qui servent a refroidir les joints d'arbre des turbines. Chargé de l'implantation de la GMAO au barrage de la rance.</p>
            </div>
        </div>
        </section>
    )
}