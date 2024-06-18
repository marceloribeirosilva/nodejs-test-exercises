import request from 'supertest';
import { server } from '../../src/index';

describe('Items API Integration Tests', () => { 
  describe('GET /items', () => {
    it('should get all items', async () => {
      const res = await request(server).get('/items');
      expect(res.statusCode).toEqual(200);
      expect(res.body).toBeInstanceOf(Array); // Verifique se é um array
    });
  });

  describe('POST /items', () => {
    it('should create a new item', async () => {
      const newItem = {
        name: 'Charmander',
        url: 'https://pokeapi.co/api/v2/pokemon'
      };
      const res = await request(server)
        .post('/items')
        .send(newItem);
      expect(res.statusCode).toEqual(201);
      expect(res.body).toMatchObject({
        name: 'Charmander',
        url: 'https://pokeapi.co/api/v2/pokemon/1/'
      }); // Verifique se o item foi criado
    });
  });

  describe('GET /items/:id', () => {
    it('should get an item by id', async () => {
      // Assumindo que você tem um item com ID 1
      const res = await request(server).get('/items/1');
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('id', 1); 
    });

    it('should return 404 if item not found', async () => {
      const res = await request(server).get('/items/999');
      expect(res.statusCode).toEqual(404);
    });
  });

  describe('PUT /items/:id', () => {
    it('should update an item', async () => {
      const updatedItem = {
        name: 'Squirtle',
        url: 'https://pokeapi.co/api/v2/pokemon'
      };
      const res = await request(server)
        .put('/items/1')
        .send(updatedItem);
      expect(res.statusCode).toEqual(200);
      expect(res.body).toMatchObject({
        name: 'Squirtle',
        url: 'https://pokeapi.co/api/v2/pokemon/1/'
      }); 
    });

    it('should return 404 if item not found', async () => {
      const res = await request(server)
        .put('/items/999')
        .send({ name: 'Teste' });
      expect(res.statusCode).toEqual(404);
    });
  });

  describe('DELETE /items/:id', () => {
    it('should delete an item', async () => {
      const res = await request(server).delete('/items/1');
      expect(res.statusCode).toEqual(204); 

      // Verificar se o item foi realmente excluído
      const getRes = await request(server).get('/items/1');
      expect(getRes.statusCode).toEqual(404);
    });

    it('should return 404 if item not found', async () => {
      const res = await request(server).delete('/items/999');
      expect(res.statusCode).toEqual(404);
    });
  });
});