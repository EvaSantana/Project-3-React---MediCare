import React from "react";
import "./CreateUser.css";
import FormularioCrearUsuario from "../../Components/CreateUserComponents/formulario"; /*IMPORTAR FORMULARIO JSX*/
import Header from "../../Components/Header/Header"; /*IMPORTAR EL HEADER QUE CREA ROCIO*/ /*COPIAR Y PEGAR EL CODIGO DE ROCIO EN Header.jsx*/
import Footer from "../../Components/Footer/Footer"; /*IMPORTAR EL FOOTER QUE CREA ROCIO*/ /*COPIAR Y PEGAR EL CODIGO DE ROCIO EN Footer.jsx*/






/*CUERPO DE LA VENTANA CREATE USER (HEADER + BODY + FOOTER)*/
function CreateUserView() {

    return (
        <>

        <Header/> 

        <div className="create-user-body">

            <div className="image-container">
                <img src="../../../public/createUserLeftImage.png" alt="leftside image" />
            </div>

            <div className="form"> {/* Importar la FUNCION del formulario */}
                <FormularioCrearUsuario/>
            </div>
        </div>

        <Footer/>

        </>

        /* llamar componente footer */
    );
};


export default CreateUserView; /*esta función es a la que se asigna la ruta desde el boton "Registrate" de la vista Home*/
