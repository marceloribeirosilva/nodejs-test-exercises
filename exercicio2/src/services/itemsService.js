import axios from 'axios';

class ItemsService {
    constructor() {
        this.items = [];
    }

    async fetchInitialData() {
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10');
            this.items = response.data.results.map((pokemon, index) => ({
                id: index + 1,
                name: pokemon.name,
                url: pokemon.url,
            }));
        } catch (error) {
            console.error('Error fetching initial data:', error);
        }
    }

    createNewItem(data) {
        const newId = this.items.length + 1;
        const newItem = {
            id: newId,
            name: data.name,
            url: `${data.url}/${newId}/`,
        };
        this.items.push(newItem);
        return newItem;
    }

    getItems() {
        return this.items;
    }

    getItem(id) {
        return this.items.find(i => i.id === id);
    }

    updateExistingItem(id, data) {
        const item = this.items.find(i => i.id === id);
        if (!item) return null;

        item.name = data.name;
        item.url = `${data.url}/${id}/`;
        return item;
    }

    deleteExistingItem(id) {
        const itemIndex = this.items.findIndex(i => i.id === id);
        if (itemIndex === -1) return false;

        this.items.splice(itemIndex, 1);
        return true;
    }
}

export default ItemsService;
