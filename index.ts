import conectarDB from "./db/db";
import { UserModel } from "./models/user";
import { Enum_Rol, Enum_TipoObjetivo } from "./models/enums";
import { ProjectModel } from "./models/project";
import { ObjectiveModel } from "./models/objective";

const main = async ()=>{
    await conectarDB();

    // const objet = await ObjectiveModel.create({
    //   descripcion:"Este es el objetivo especifio",
    //   tipo: Enum_TipoObjetivo.especifico,
    // });

    // ProjectModel.create({
    //   nombre: "Proyecto 2",
    //   presupuesto: 120,
    //   fechaInicio: Date.now(),
    //   fechaFin: new Date("2022/11/10"),
    //   lider: "618b277415de7d5bac29f0ba",
    //   objetivos:["618c7531b61caa2c7353438c", "618c75545de411b0761fe98a"],
    // });



    const Proyecto = await ProjectModel.find({nombre: "Proyecto 2"}).populate("lider").populate("objetivos");
    console.log("el proyecto es: ", JSON.stringify(Proyecto));

//     const lider = await UserModel.find({ id: Proyecto[0].lider});
//     console.log("El lider del proyecto es: ", lider);
};

main();

    //CRUD USUARIOS

    // CREAR UN USUARIO
    // const usuario= await UserModel.create({
    //     apellido: 'Perez',
    //     correo: 'david@hotmail.com',
    //     identificacion: '132214',
    //     nombre: 'David',
    //     rol: Enum_Rol.administrador,
    //   })
    //     .then((u) => {
    //       console.log('usuario creado', u);
    //     })
    //     .catch((e) => {
    //       console.error('Error creando el usuario', e);
    //     });


        // OBTENER LOS USUARIOS
      // await UserModel.find()
      //   .then((u) => {
      //     console.log('usuarios', u);
      //   })
      //   .catch((e) => {
      //     console.error('error obteniendo los usuarios', e);
      //   });


      //OBTENER UN SOLO USUARIO
      // await UserModel.findOne({identificacion: "133234"})
      // .then((u)=>{
      //   console.log("Usuario encontrado", u)
      // }).catch((e)=>{
      //   console.error("Usuario no encontrado", e)
      // });

      // // EDITAR UN USUARIO
      // await UserModel.findOneAndUpdate({correo:"michelle@hotmail.com"},{
      //   nombre: "Gary",
      //   apellido: "Duque",
      // }
      // )
      //   .then((u)=>{
      //     console.log("Usuario actualizado", u);
      //   }).catch((e)=>{
      //     console.error("Error actualizando", e)
      //   });

    
    // ELIMINAR UN USUARIO
    // await UserModel.findOneAndDelete({correo:"daniela@hotmail.com"})
    //   .then((u)=>{
    //     console.log("Usuario eliminado", u);
    //   })
    //   .catch((e)=>{
    //     console.error("Error eliminando", e)
    //   });