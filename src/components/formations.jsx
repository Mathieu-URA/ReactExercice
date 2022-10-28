import gim from '../img/gim.png'
import iut from '../img/iut.jpg'
import imts from '../img/imts.png'

export const Formations = () => {
    return (
        <section className="Formation">
        <h2>Formation</h2>
        
        <div className="exp">
        <div class="exp-logo">
            <img src={imts}></img>
            </div>
            <div class="exp-info">
                <h3>Formation developeur Backend</h3>
                <h4>2020 - 2022</h4>
            </div>
            <div class="exp-desc">
                <p>IMTS</p>
            </div>
        </div>
        <div class="exp">
        <div class="exp-logo">
            <img src={iut}></img>
            </div>
            <div class="exp-info">
                <h3>Licence Pro Maintenance et QSE</h3>
                <h4>2016</h4>
            </div>
            <div class="exp-desc">
                <p>IUT Saint-Malo</p>
            </div>
        </div>
        <div class="exp">
        <div class="exp-logo">
            <img src={gim}></img>
            </div>
            <div class="exp-info">
                <h3>DUT Génie Industriel et Maintenance</h3>
                <h4>2013 - 2015</h4>
            </div>
            <div class="exp-desc">
                <p>IUT Saint-Malo</p>
            </div>
        </div>
        </section>
    )
}