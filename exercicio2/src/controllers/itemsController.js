import ItemsService from '../services/itemsService.js';

class ItemsController {
    constructor() {
        this.service = new ItemsService();
        this.service.fetchInitialData();
    }
    
    createItem = (req, res) => {
        const newItem = this.service.createNewItem(req.body);
        res.status(201).json(newItem);
    };

    getAllItems = (req, res) => {
        const items = this.service.getItems();
        res.json(items);
    };

    getItemById = (req, res) => {
        const item = this.service.getItem(parseInt(req.params.id));
        if (!item) return res.status(404).send('Item not found');
        res.json(item);
    };

    updateItem = (req, res) => {
        const item = this.service.updateExistingItem(parseInt(req.params.id), req.body);
        if (!item) return res.status(404).send('Item not found');
        res.json(item);
    };

    deleteItem = (req, res) => {
        const success = this.service.deleteExistingItem(parseInt(req.params.id));
        if (!success) return res.status(404).send('Item not found');
        res.status(204).send();
    };
}

export default ItemsController;
