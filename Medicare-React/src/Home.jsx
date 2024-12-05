import { useState } from "react";
import { Link } from 'react-router-dom';
import "./Home.css";


function Home() {
  const [showLogin, setShowLogin] = useState(false);

  const specialities = [
    { name: "Endocrinología", image: "/endocriono.png" },
    { name: "Ginecología", image: "/ginecologo.png" },
    { name: "Oftalmología", image: "/Oftalmologo.png" },
    { name: "Traumatología", image: "/tramatologia.png" },
    { name: "Oncología", image: "/oncologo.png" },
    { name: "Medicina Interna", image: "/medicoInterno.png" },

  ];
  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <img src="../public/logo.png" alt="Logo" className="logo" />
        <button
          className="access-banner-button"
          onClick={() => setShowLogin(true)}
        >
          Log in
        </button>
      </header>

      {/* Banner */}
      <div className="banner">
        <img src="../public/banner_pic.jpg" className="banner-image" />
        <h1 className="banner-text">
          Explicación de <br /> funcionalidad de la web
        </h1>
      </div>

      {/* Specialities Section */}
      <section className="specialities">
        <h2 className="specialities-title">MEDICAL ESPECIALITIES</h2>
        <div className="specialities-grid">
          {specialities.map((speciality, index) => (
            <div className="speciality-card" key={index}>
              <img
                src={speciality.image}
                alt={speciality.name}
                className="speciality-image"
              />
              <p className="speciality-text">{speciality.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
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

     {/*  Formulario pop-up */}
      {showLogin && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Welcome</h2>
            <form>
              <input type="text" placeholder="Email" className="input-field" />
              <input
                type="password"
                placeholder="Password"
                className="input-field"
              />
              <button type="submit" className="login-button">
                Login
              </button>
            </form>
            <div className="links">
              <a
                href="https://accounts.google.com/v3/signin/recoveryidentifier?ard=AHwGkRlCdvbl0AEXUjNnXxa8ho21NVUrW6V8vV3werBju8Vj4AKOJonOfCS09rLSszKeF-MCowRcQuxdgSGG5PBwFz1Ppd7WENTvCrUeCa2vHzK0Ht3p6FM&fpOnly=1&hl=en&service=mail&flowName=GlifWebSignIn&dsh=S-468234728%3A1733264926697843&ddm=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Forgot your password?
              </a>
              <Link to="/signup"><p>Don't have an account? Register</p></Link> {/* Cambio aquí */}
            </div>
            <button
              className="close-button"
              onClick={() => setShowLogin(false)}
            >
              {" "}
              Close{" "}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Home;
