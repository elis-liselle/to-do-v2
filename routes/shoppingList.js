const express = require('express');
const shoppingController = require("../controllers/shoppingListController");
const shoppingRouter = express.Router();

shoppingRouter.get("/shoppingList", shoppingController.getShoppingPage);

shoppingRouter.post("/shoppingList", shoppingController.postNewItem);

shoppingRouter.post("/shoppingDelete", shoppingController.deleteItem);

module.exports = shoppingRouter;
