{/* Footer */ }
import React from 'react'
import "./Footer.css"

 const Footer = () => {
  return (
    <>
          <footer className="footer">
              <div className="footer-top">
                  <img src="../public/logo.png" alt="Logo" className="footer-logo" />
                  <div className="footer-info">
                      <p>988 725 255</p>
                      <p>Luis Morote 8, Las Palmas de Gran Canaria</p>
                      <p>hospital@medicare.com</p>
                  </div>
              </div>
              <div className="footer-bottom">
                  <p>© 2023 MediCare - All Rights Verifique</p>
                  <div className="footer-icons">
                      <a href="../public/instagram.png" className="social-icon">

                      </a>
                      <a href="../public/facebook.png" className="social-icon">

                      </a>
                      <a href="../public/x.png" className="social-icon">

                      </a>
                  </div>
              </div>
          </footer>
    </>
  )
}

export default Footer