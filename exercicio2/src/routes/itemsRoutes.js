import express from 'express';
import ItemsController from '../controllers/itemsController.js';

class ItemsRoutes {
    constructor() {
        this.router = express.Router();
        this.controller = new ItemsController();
        this.initializeRoutes();
    }

    initializeRoutes() {
      /**
       * Create a new item
       *
       * @route POST /items
       * @summary Create a new item in the system
       * @param {object} data Item data
       * @param {string} data.name Item name
       * @param {string} data.url Item URL
       * @returns {object} New item object
      */
      this.router.post('/', this.controller.createItem);

      /**
       * Create a new item
       *
       * @route POST /items
       * @summary Create a new item in the system
       * @param {object} data Item data
       * @param {string} data.name Item name
       * @param {string} data.url Item URL
       * @returns {object} New item object
      */
      this.router.get('/', this.controller.getAllItems);

      /**
       * Create a new item
       *
       * @route POST /items
       * @summary Create a new item in the system
       * @param {object} data Item data
       * @param {string} data.name Item name
       * @param {string} data.url Item URL
       * @returns {object} New item object
      */
      this.router.get('/:id', this.controller.getItemById);

      /**
       * Create a new item
       *
       * @route POST /items
       * @summary Create a new item in the system
       * @param {object} data Item data
       * @param {string} data.name Item name
       * @param {string} data.url Item URL
       * @returns {object} New item object
      */
      this.router.put('/:id', this.controller.updateItem);

      /**
       * Create a new item
       *
       * @route POST /items
       * @summary Create a new item in the system
       * @param {object} data Item data
       * @param {string} data.name Item name
       * @param {string} data.url Item URL
       * @returns {object} New item object
      */
      this.router.delete('/:id', this.controller.deleteItem);
    }
}

export default ItemsRoutes;
