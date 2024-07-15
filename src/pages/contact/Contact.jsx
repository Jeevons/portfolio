import './Contact.css'

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-content">
        <h2>Contactez moi</h2>
        <p>Je suis actuellement à la recherche d&apos; contrat d&apos;alternance de 2 ans.</p>
      </div>
      <div className="contact-container">
        <div className="contactInfo">
          <div className="infoBox">
            <div className="infoIcon"><b></b><i className="fa-solid fa-location-dot"></i></div>
            <div className="text">
              <h3>Adresse</h3>
              <p>1 rue du terme Boréal 77127 Lieusaint france<br/><br/>306 rue Victor hugo, 37000 Tours France</p>
            </div>
          </div>
          <div className="infoBox">
            <div className="infoIcon"><b></b><i className="fa-solid fa-phone"></i></div>
            <div className="text">
              <h3>Phone</h3>
              <p>07.81.38.43.95</p>
            </div>
          </div>
          <div className="infoBox">
            <div className="infoIcon"><b></b><i className="fa-solid fa-envelope"></i></div>
            <div className="text">
              <h3>Email</h3>
              <p>jeevons.eya.jr@gmail.com</p>
            </div>
          </div>
          <h3 className="txt">Suivez moi sur les réseaux</h3>
          <ul className='sci'>
            <li><a href="#"><i className="fa-brands fa-tiktok"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
          </ul>
        </div>
        <div className="contactCV">
          <div className="cv">
            <img src="public/assets/images/cv/cv.png" alt="Jeevons Cv" />
          </div>
          <div className="downloadCv">
            <a href="public/assets/images/cv/creativeCv_Jeevons3.0.pdf"  download>Télécharger CV</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact