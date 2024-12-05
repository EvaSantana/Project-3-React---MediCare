import React, { useState } from 'react';
import Sidebar from '../../Components/PatientViewComponents/sidebar';
import MainContent from '../../Components/PatientViewComponents/cards';
import Header2 from '../../Components/PatientViewComponents/header2';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import './PatientView.css' 


function PatientView() {
  const [activeSection, setActiveSection] = useState('citas'); // Por defecto, "citas"

  const handleMenuClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <div className="container">
        <Header />
        <Header2 />
        <div className="patientViewBody">
          <Sidebar onMenuClick={handleMenuClick} />
          <MainContent activeSection={activeSection} />
        </div>
        <div className="footerPatientView"><Footer /></div>

      </div>
    </>
  );
}

export default PatientView