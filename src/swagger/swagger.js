const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Contact API',
      version: '1.0.0',
      description: 'API for Contact Us form submissions',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./src/routes/*.js'], // files containing annotations for the Swagger docs
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
