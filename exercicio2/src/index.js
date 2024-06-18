import express from 'express';
import ItemsRoutes from './routes/itemsRoutes.js';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc'; 

const app = express();
const port = 3000;

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Teste API ClearSale',
      version: '1.0.0',
      description: 'Api criada para o teste da ClearSale'
    },
    servers: [{ url: 'http://localhost:3000' }]
  },
  apis: ['./routes/itemsRoutes.js'],
};

const specs = swaggerJsdoc(options);
console.log(specs)

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use('/items', new ItemsRoutes().router);


app.listen(port, () => {
    console.log(`API listening at http://localhost:${port}`);
});

export const server = app;
