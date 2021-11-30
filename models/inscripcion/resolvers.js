import { InscriptionModel } from './inscripcion.js';

const resolverInscripciones = {
  Query: {
    Inscripciones: async (parent, args) => {
      const inscripciones = await InscriptionModel.find();
      return inscripciones;
    },
    Inscripcion: async (parent, args) => {
      const inscripcion = await InscriptionModel.findOne({ _id: args._id });
      return inscripcion;
    },
    InscripcionesNoAprobadas: async () => {
      const inscripcionesNoAprobadas = await InscriptionModel.find({ estado: 'PENDIENTE' }).populate('estudiante');
      return inscripcionesNoAprobadas;
    },
  },

  Mutation: {
    crearInscripcion: async (parent, args) => {
      const inscripcionCreada = await InscriptionModel.create({
        estado: args.estado,
        proyecto: args.proyecto,
        estudiante: args.estudiante,
      });
      return inscripcionCreada;
    },
    aprobarInscripcion: async (parent, args) => {
      const inscripcionAprobada = await InscriptionModel.findByIdAndUpdate(
        args.id,
        {
          estado: 'ACEPTADO',
          fechaIngreso: Date.now(),
        },
        { new: true }
      );
      return inscripcionAprobada;
    },
  },
};

export { resolverInscripciones };