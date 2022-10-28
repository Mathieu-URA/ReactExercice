import mathieu from '../img/mathieu.jpg'



export const Informations = () => {
    return (

        <section>
            
            <div className="prez">
            <h2>Qui suis-je ?</h2>
            <p>Diplômé d'un DUT GIM et certifier developeur Backend</p>
            </div>
            <div className="photo">
                <img src={mathieu}></img>
            </div>
            <div className="contact">
            <h2>Informations de contact</h2>
            <div class="contact-flex">
                <p>Nom : </p>
                <p>Mathieu Peran</p>
            </div>
            <div className="contact-flex">
                <p>Adresse : </p>
                <p>8 rue du port 35780 La Richardais</p>
            </div>
            <div className="contact-flex">
                <p>Téléphone :</p>
                <p>06 69 63 61 51</p>
            </div>
            <div className="contact-flex">
                <p>Mail : </p>
                <p><a href="mailto:mathieu.peran@gmail.com">mathieu.peran@gmail.com</a></p>
            </div>
            <div className="contact-flex">
                <p>Permis :</p>
                <p>B</p>
            </div>
        </div>
    </section>
    )
}