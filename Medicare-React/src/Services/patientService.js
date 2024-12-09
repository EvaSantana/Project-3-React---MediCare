import api from '../Services/index';


const getAllPatients = async () => {
    try {
        // Hacer la petición al endpoint `/patients`
        const { data } = await api.get("/patients", {
            headers: {
                Authorization: localStorage.getItem("token"), // Añadir token desde localStorage
            },
        });

        return data; // Devolver la data directamente
    } catch (error) {
        console.error("Error al obtener pacientes:", error);
        throw new Error("No se pudieron obtener los pacientes");
    }
};

// Obtener un paciente por su ID
const getOnePatient = async (id) => {
    try {
        const { data } = await api.get(`/patients/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token"),
            },
        });

        return data;
    } catch (error) {
        console.error(`Error al obtener el paciente con ID ${id}:`, error);
        throw new Error("No se pudo obtener el paciente");
    }
};

const createPatientByDoctor = async (medicoID, patientData) => {
    try {
        const { data } = await api.post(`/doctors/${medicoID}/patients`, patientData, {
            headers: {
                Authorization: localStorage.getItem("token"),
            },
        });

        return data;
    } catch (error) {
        console.error(`Error al crear un paciente para el médico ${medicoID}:`, error);
        throw new Error("No se pudo crear el paciente");
    }
};

export {
    getAllPatients,
    getOnePatient,
    createPatientByDoctor
}