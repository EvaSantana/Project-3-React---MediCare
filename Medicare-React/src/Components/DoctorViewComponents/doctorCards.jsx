import './doctorCards.css';
import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Estilos del calendario
import { getAllPatients } from '../../Services/patientService'; // Simulación de API para obtener pacientes
import { createPatientByDoctor } from '../../Services/patientService';

function DoctorMainContent({ activeSection }) {
    const [patients, setPatients] = useState([]); // Estado para almacenar los pacientes
    const [showPopup, setShowPopup] = useState(false); // Controlar la visualización del popup
    const [selectedDate, setSelectedDate] = useState(null); // Fecha seleccionada
    const [appointments, setAppointments] = useState([]); // Almacenar citas

    
    // Función para cargar datos de pacientes
    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const response = await getAllPatients();
                
                setPatients(response);
            } catch (error) {
                console.error('Error al cargar pacientes', error);
            }
        };
        
        if (activeSection === 'verPacientes') {
            fetchPatients();
        }
    }, [activeSection]);

    // Función para cargar las citas


    const handleDateChange = (date) => {
        setSelectedDate(date);
        setShowPopup(true); // Mostrar pop-up con el calendario
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="activeSection">
            {/* Título dinámico */}
            <h1>{activeSection.replace(/([A-Z])/g, ' $1').trim()}</h1>

            {/* Sección Ver Pacientes */}
            {activeSection === 'verPacientes' && (
                <ul>
                    {patients?.slice(0, 5).map((patients, index) => (
                        <li key={index} className="card">
                            <p><strong>Nombre:</strong> {patients.nombre}</p>
                            <p><strong>Apellidos:</strong> {patients.apellidos}</p>
                            <p><strong>Telefono:</strong> {patients.telefono}</p>
                            <p><strong>Email:</strong> {patients.email}</p>
                        </li>
                    ))}
                </ul>
            )}

            {/* Sección Añadir Pacientes */}
            {activeSection === 'añadirPacientes' && (
                <div className="formContainer">
                    <h3>Formulario de Nuevo Paciente</h3>
                    <form>
                        <label>Nombre: </label>
                        <input type="text" name="nombre" required />
                        <label>Apellidos: </label>
                        <input type="text" name="apellidos" required />
                        <label>Telefono: </label>
                        <input type="number" name="telefono" required />
                        <button type="submit">Guardar</button>
                        <label>Email: </label>
                        <input type="email" name="email" required />
                        <button type="submit">Guardar</button>
                    </form>
                </div>
            )}

            {/* Sección Mis Citas */}
            {activeSection === 'misCitas' && (
                <>
                    <div className="calendarContainer">
                        <Calendar
                            onChange={handleDateChange}
                            value={selectedDate}
                            className="calendar"
                        />
                    </div>

                    {showPopup && (
                        <div className="popup-overlay">
                            <div className="popup">
                                <p>Fecha seleccionada: {selectedDate?.toLocaleDateString()}</p>
                                <div className="popup-buttons">
                                    <button onClick={handleClosePopup}>Cerrar</button>
                                </div>
                            </div>
                        </div>
                    )}

                    <div>
                        <h3>Citas Disponibles:</h3>
                        <ul>
                            {appointments?.map((cita, index) => (
                                <li key={index} className="card">
                                    <p><strong>Fecha:</strong> {cita.fecha}</p>
                                    <p><strong>Hora:</strong> {cita.hora}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            )}
        </div>
    );
}

export default DoctorMainContent;
