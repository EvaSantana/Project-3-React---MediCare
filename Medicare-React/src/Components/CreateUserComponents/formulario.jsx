
import { useState } from "react";
import "./formulario.css"
import { Link } from 'react-router-dom'; 

function FormularioCrearUsuario() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({
        passwordMismatch: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Reset password mismatch error when passwords change
        if (name === "password" || name === "confirmPassword") {
            setErrors({ ...errors, passwordMismatch: false });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if passwords match
        if (formData.password !== formData.confirmPassword) {
            setErrors({ ...errors, passwordMismatch: true });
            return;
        }

        // Send formData to the backend (placeholder console.log)
        console.log("Form submitted:", formData);
    };



    return (

        <div className="register-form-container">
            <h2>Introduce tus datos personales</h2>

            <form className="register-form" onSubmit={handleSubmit}>

                <div className="form-group">
                    <label className="firstName">Nombre<span className="asterisk">*</span></label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="Escribe tu nombre"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label className="lastName">Apellidos<span className="asterisk">*</span></label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Escribe tus apellidos"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label className="phone">Teléfono<span className="asterisk">*</span></label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Escribe tu teléfono"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label className="email">Email<span className="asterisk">*</span></label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Escribe tu email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label className="password">Contraseña<span className="asterisk">*</span></label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Escribe tu contraseña"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label className="confirmPassword">Confirmar contraseña<span className="asterisk">*</span></label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirma tu contraseña"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    {errors.passwordMismatch && (
                        <span className="error-message">Las contraseñas no coinciden.</span>
                    )}
                </div>
                <br/>
                
                <button type="submit" className="submit-button"> <Link to='/patient'><p>Crear cuenta</p></Link> </button> {/* aqui linkear a vista PatientView */}
               

            </form>
        </div>
    )



}

export default FormularioCrearUsuario