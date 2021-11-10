import conectarDB from "./db/db";
import { UserModel } from "./models/user";
import { Enum_Rol } from "./models/enums";

const main = async ()=>{
    await conectarDB();

     // CREAR UN USUARIO
    await UserModel.create({
        apellido: 'Michelle',
        correo: 'michelle@hotmail.com',
        identificacion: '133234',
        nombre: 'Michelle',
        rol: Enum_Rol.administrador,
      })
        .then((u) => {
          console.log('usuario creado', u);
        })
        .catch((e) => {
          console.error('Error creando el usuario', e);
        });
        
};

main();