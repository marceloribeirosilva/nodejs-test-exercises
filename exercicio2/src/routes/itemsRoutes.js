import express from 'express';
import ItemsController from '../controllers/itemsController.js';

class ItemsRoutes {
    constructor() {
        this.router = express.Router();
        this.controller = new ItemsController();
        this.initializeRoutes();
    }

    initializeRoutes() {      
      this.router.post('/', this.controller.createItem);
      this.router.get('/', this.controller.getAllItems);
      this.router.get('/:id', this.controller.getItemById);
      this.router.put('/:id', this.controller.updateItem);
      this.router.delete('/:id', this.controller.deleteItem);
    }
}

export default ItemsRoutes;
