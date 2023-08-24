const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0', // Versión de Swagger/OpenAPI
    info: {
      title: 'Gym API', // Título de la documentación
      version: '1.0.0', // Versión de la API
      description: 'API for gym sistem',
    },
  },
  // Rutas donde se encuentran los endpoints
  apis: ['./src/api/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;

// // Definición del esquema UserUpdate
// swaggerSpec.components = {
//   schemas: {
//     UserUpdate: {
//       type: 'object',
//       properties: {
//         nombre: { type: 'string' },
//         apellido: { type: 'string' },
//       },
//       example: {
//         nombre: 'NuevoNombre',
//         apellido: 'NuevoApellido',
//       },
//     },
//   },
// };

// module.exports = swaggerSpec;