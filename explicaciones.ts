import conectarDB from "./db/db";
import { UserModel } from "./models/usuario/usuario";
import { Enum_EstadoUsuario, Enum_Rol, Enum_TipoObjetivo } from "./models/enums/enums";
import { ProjectModel } from "./models/proyecto/proyecto";
import { ObjectiveModel } from "./models/objective";


//METODOLOGIA ONE TO MANY

const crearProyectoConObjetivos3 = async ()=>{
  const usuarioInicial = await UserModel.create({
    nombre: "Edgar",
    apellido: "Abello",
    correo: "edgar@hotmail.com",
    identificacion: "1224",
    rol: Enum_Rol.ADMINISTRADOR,
    estado: Enum_EstadoUsuario.AUTORIZADO,
  });

  const Proyecto = await ProjectModel.create({
    nombre: "Poyecto Mision TIC",
    fechaInicio: new Date ("2021/12/24"),
    fechaFin: new Date ("2022/12/24"),
    presupuesto: 120000,
    lider: usuarioInicial._id,
    objetivos: [
      {descripcion: "Este es el objetivo general", tipo: Enum_TipoObjetivo.GENERAL},
      {descripcion: "Este es el objetivo especifico 1", tipo: Enum_TipoObjetivo.ESPECIFICO},
      {descripcion: "Este es el objetivo especifico 2", tipo: Enum_TipoObjetivo.ESPECIFICO},
    ],
  });
}

   const consultarProyectoConObjetivos3 = async()=>{
    const proyectoCreado = await ProjectModel.find({id:"618df0e82af32d6807849c3f"});
    console.log("proyecto", proyectoCreado);
   }

const main = async ()=>{
    await conectarDB();
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