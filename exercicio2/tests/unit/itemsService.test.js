import axios from 'axios';
import ItemsService from '../../src/services/itemsService.js';

describe('ItemsService', () => {
  let service;

  beforeEach(() => {
    service = new ItemsService();
  });

  afterEach(() => {    
    service.items = [];
  });

  it('should create a new item', () => {
    const newItemData = { name: 'Pikachu', url: 'https://pokeapi.co/api/v2/pokemon' };
    const newItem = service.createNewItem(newItemData);

    expect(newItem).toMatchObject({
      id: 1,
      name: 'Pikachu',
      url: 'https://pokeapi.co/api/v2/pokemon/1/'
    });
    expect(service.items).toHaveLength(1);
  });

  it('should get all items', () => {
    service.items = [
      { id: 1, name: 'Pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25/' },
      { id: 2, name: 'Bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' }
    ];

    const items = service.getItems();

    expect(items).toHaveLength(2);
    expect(items[0]).toMatchObject({ id: 1, name: 'Pikachu' });
    expect(items[1]).toMatchObject({ id: 2, name: 'Bulbasaur' });
  });

  it('should get item by id', () => {
    service.items = [
      { id: 1, name: 'Pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25/' },
      { id: 2, name: 'Bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' }
    ];

    const item = service.getItem(2);

    expect(item).toMatchObject({ id: 2, name: 'Bulbasaur' });
  });

  it('should update existing item', () => {
    service.items = [
      { id: 1, name: 'Pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25/' },
      { id: 2, name: 'Bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' }
    ];

    const updatedData = { name: 'Charmander', url: 'https://pokeapi.co/api/v2/pokemon' };
    const updatedItem = service.updateExistingItem(2, updatedData);

    expect(updatedItem).toMatchObject({ id: 2, name: 'Charmander', url: 'https://pokeapi.co/api/v2/pokemon/2/' });
  });

  it('should delete existing item', () => {
    service.items = [
      { id: 1, name: 'Pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25/' },
      { id: 2, name: 'Bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' }
    ];

    const success = service.deleteExistingItem(1);

    expect(success).toBe(true);
    expect(service.items).toHaveLength(1);
  });

  it('should handle fetching initial data', async () => {
    const mockData = {
      data: {
        results: [
          { name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25/' },
          { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' }
        ]
      }
    };

    jest.spyOn(axios, 'get').mockResolvedValueOnce(mockData);

    await service.fetchInitialData();

    const items = service.getItems();

    expect(items).toHaveLength(2);
    expect(items[0]).toMatchObject({ id: 1, name: 'pikachu' });
    expect(items[1]).toMatchObject({ id: 2, name: 'bulbasaur' });
  });
});
