import { connect } from "mongoose";

const conectarDB = async ()=>{
    return await connect (
        "mongodb+srv://admin:admin0102@gestionproyectosmisiont.20uiu.mongodb.net/GestionProyectos?retryWrites=true&w=majority"
        ).then(()=>{
            console.log("Conexion exitosa")
        }).catch(e=>{
            console.error("error conectando a la bd", e)
        })
};

export default conectarDB;