import './cards.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Estilos del calendario
import { getAllPrescriptions } from '../../Services/prescriptionService';
import { getAllMedications } from '../../Services/medicationService';
import { getAllDoctors } from '../../Services/doctorService';
import { getAllAppointments } from '../../Services/appointmentService';

function MainContent({ activeSection }) {
    const [data, setData] = useState([]); // Estado para almacenar los datos de la API
    const [selectedDate, setSelectedDate] = useState(null); // Fecha seleccionada en el calendario
    const [selectedTime, setSelectedTime] = useState(''); // Hora seleccionada
    const [selectedEspecialidad, setSelectedEspecialidad] = useState(''); // Especialidad seleccionada
    const [especialidades, setEspecialidades] = useState([]); // Estado para almacenar las especialidades

    const [showPopup, setShowPopup] = useState(false); // Controlar el pop-up
    const [citas, setCitas] = useState([]); // Estado para almacenar las citas

    // Función para cargar datos desde la API
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (activeSection === 'citas') {
                    // Cargar citas
                    const citasResponse = await getAllAppointments();
                    setCitas(citasResponse);

                    // Cargar especialidades
                    const doctorsResponse = await getAllDoctors();

                    setEspecialidades(() => {
                        let arr = doctorsResponse?.map((doctor) => {
                            return doctor.especialidad
                        })

                        return [...new Set(arr)]
                    }
                    )
                } else if (activeSection === 'medicamentos') {
                    const medicamentosResponse = await getAllMedications();
                    setData(medicamentosResponse);
                } else if (activeSection === 'recetas') {
                    const recetasResponse = await getAllPrescriptions();
                    console.log(recetasResponse)
                    setData(recetasResponse);
                }
            } catch (error) {
                console.error('Error al cargar datos:', error);
            }
        };

        fetchData();
    }, [activeSection]);

    // Maneja la selección de una fecha en el calendario
    const handleDateChange = (date) => {
        setSelectedDate(date);
        setShowPopup(true); // Muestra el pop-up cuando se selecciona una fecha
    };

    // Maneja la selección de una hora
    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value); // Almacena la hora seleccionada
    };

    // Maneja la selección de una especialidad
    const handleEspecialidadChange = (event) => {
        setSelectedEspecialidad(event.target.value); // Almacena la especialidad seleccionada
    };

    // Función para confirmar la selección de la fecha y hora
    const handleConfirm = () => {
        if (selectedDate && selectedTime && selectedEspecialidad) {
            // Crear una nueva cita
            const nuevaCita = {
                fecha: selectedDate.toLocaleDateString(), // Convertir la fecha al formato legible
                hora: selectedTime, // Usar la hora seleccionada
                doctor: selectedEspecialidad, // Usar la especialidad seleccionada como "doctor"
            };

            // Actualizar el estado con la nueva cita
            setCitas((prevCitas) => [...prevCitas, nuevaCita]);
            console.log('Nueva cita agregada:', nuevaCita);
        }

        setShowPopup(false); // Cerrar el pop-up
    };

    // Función para cancelar la selección
    const handleCancel = () => {
        setShowPopup(false); // Cierra el pop-up
    };

    return (
        <div className="activeSection">
            <h1>{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</h1>

            {/* Renderizado para Citas */}
            {activeSection === 'citas' && (
                <>
                    <ul>
                        {citas?.map((cita, index) => (
                            <li key={index} className="card">
                                <p><strong>Fecha:</strong> {cita.fecha}</p>
                                <p><strong>Hora:</strong> {cita.hora}</p>
                                <p><strong>Especialidad:</strong> {cita.especialidad}</p>
                            </li>
                        ))}
                    </ul>

                    {/* Mostrar el calendario */}
                    <Calendar onChange={handleDateChange} value={selectedDate} />

                    {/* Selección de especialidad */}
                    <div style={{ marginTop: '20px' }}>
                        <label htmlFor="especialidades">Selecciona una especialidad:</label>
                        <select
                            id="especialidades"
                            value={selectedEspecialidad}
                            onChange={handleEspecialidadChange}
                        >
                            <option value="">--Selecciona una especialidad--</option>
                            {
                                especialidades?.map((especialidad, index) => {
                                    return (<option key={index} value={especialidad}>
                                        {especialidad}
                                    </option>)
                                }
                                )}
                        </select>
                    </div>

                    {/* Pop-up para confirmar la fecha seleccionada */}
                    {showPopup && (
                        <div className="popup-overlay">
                            <div className="popup">
                                <p>Selecciona una hora para tu cita:</p>
                                <select value={selectedTime} onChange={handleTimeChange}>
                                    <option value="">Selecciona una hora</option>
                                    <option value="09:00 AM">09:00 AM</option>
                                    <option value="10:00 AM">10:00 AM</option>
                                    <option value="11:00 AM">11:00 AM</option>
                                    <option value="12:00 PM">12:00 PM</option>
                                    <option value="01:00 PM">01:00 PM</option>
                                    <option value="02:00 PM">02:00 PM</option>
                                    <option value="03:00 PM">03:00 PM</option>
                                </select>
                                <div className="popup-buttons">
                                    <button
                                        onClick={handleConfirm}
                                        disabled={!selectedTime || !selectedEspecialidad}
                                    >
                                        Confirmar
                                    </button>
                                    <button onClick={handleCancel}>Cancelar</button>
                                </div>
                            </div>
                        </div>
                    )}
                </>
            )}

            {/* Renderizado para Medicamentos */}
            {activeSection === 'medicamentos' && (
                <ul>
                    {data.map((medicamento, index) => (
                        <li key={index} className="card">
                            <p><strong>Nombre del medicamento:</strong> {medicamento.nombre}</p>
                            <p><strong>Efectos Secundarios:</strong> {medicamento.efectoSecundario}</p>
                            <p><strong>Tipo:</strong> {medicamento.tipo}</p>
                        </li>
                    ))}
                </ul>
            )}

            {/* Renderizado para Recetas */}
            {activeSection === 'recetas' && (
                <ul>
                    {data.map((receta, index) => (
                        <li key={index} className="card">
                            <p><strong>Nombre:</strong> {receta.nombre}</p>
                            <p><strong>Descripción:</strong> {receta.descripcion}</p>
                            <p><strong>Fecha:</strong> {receta.fecha}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default MainContent;;