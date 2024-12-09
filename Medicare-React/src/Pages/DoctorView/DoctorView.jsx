import { useState } from 'react';
import './DoctorView.css'
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Header2 from '../../Components/PatientViewComponents/header2';
import DoctorMainContent from '../../Components/DoctorViewComponents/doctorCards';
import DoctorSidebar from '../../Components/DoctorViewComponents/doctorSidebar';
 

function DoctorView() {
  const [activeSection, setActiveSection] = useState('citas');
  const handleMenuClick = (section) => {
    setActiveSection(section);
  };
  return (
    <>
    <Header/>
    <Header2/>
      <div className="app-container2">
        <DoctorSidebar onMenuClick={handleMenuClick} />
        <div className="main-content-container">
          <DoctorMainContent activeSection={activeSection} />
        </div>
      </div>
    <Footer/>
    </>
  )
}

export default DoctorView