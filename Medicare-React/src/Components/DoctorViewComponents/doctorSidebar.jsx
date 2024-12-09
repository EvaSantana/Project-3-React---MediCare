import React from 'react';
import './doctorCards.css';

function DoctorSidebar({ onMenuClick }) {
    return (
        <>
            <aside className="sidebar2">
                <nav className="menu">
                    <button className="menu-button2" onClick={() => onMenuClick('verPacientes')}>
                        MIS PACIENTES
                    </button>
                    <button className="menu-button2" onClick={() => onMenuClick('añadirPacientes')}>
                        CREAR PACIENTE
                    </button>
                    <button className="menu-button2" onClick={() => onMenuClick('misCitas')}>
                        CITAS 
                    </button>
                </nav>
            </aside>
        </>
    );
};

export default DoctorSidebar;