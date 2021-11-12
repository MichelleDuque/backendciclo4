import { connect } from "mongoose";

const conectarDB = async ()=>{
    return await connect(process.env.DATABASE_URL)
    .then(()=>{
            console.log("Conexion exitosa")
        }).catch(e=>{
            console.error("error conectando a la bd", e)
        })
};

export default conectarDB;