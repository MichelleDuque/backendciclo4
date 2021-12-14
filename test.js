import { tipos } from './graphql/types.js';
import { resolvers } from './graphql/resolvers.js';
import { gql } from 'apollo-server-express';
import { ApolloServer } from 'apollo-server-express';
import conectarBD from './db/db.js';
import dotenv from 'dotenv';
import assert from 'assert';

dotenv.config();
await conectarBD();

const server = new ApolloServer({
  typeDefs: tipos,
  resolvers: resolvers,
});

it('fetches user', async () => {
  const result = await server.executeOperation({
    query: gql`
      query Usuario($id: String!) {
        Usuario(_id: $id) {
          correo
        }
      }
    `,
    variables: {
      id: '61b00f48f07c53bfe78be585',
    },
  });

  assert.equal(result.data.Usuario.correo, 'maria@correo.com');
});

it('creates user', async () => {
  const result = await server.executeOperation({
    query: gql`
      mutation CrearUsuario(
        $nombre: String!
        $apellido: String!
        $identificacion: String!
        $correo: String!
        $rol: Enum_Rol!
        $password: String!
      ) {
        crearUsuario(
          nombre: $nombre
          apellido: $apellido
          identificacion: $identificacion
          correo: $correo
          rol: $rol
          password: $password
        ) {
          _id
        }
      }
    `,
    variables: {
      nombre: 'maria',
      apellido: 'starr',
      identificacion: '098890',
      correo: 'maria@correo.com',
      rol: 'ADMINISTRADOR',
      password: '12345',
    },
  });

  assert.notEqual(result.data.CrearUsuario, null);
});