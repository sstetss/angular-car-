const express = require('express');
const jwt = require('jsonwebtoken');
const {getItems,getOneItem,addItem, deleteItem, editItem, getUser, addUser} = require('../controllers/itemController')
const itemRouter = express.Router()
const jsonParser = express.json()

itemRouter.get('/items',jsonParser, getItems)

itemRouter.get('/items/:id', getOneItem)

itemRouter.delete('/items/:id', deleteItem)

itemRouter.put('/items/:id',jsonParser,editItem )

itemRouter.post('/items',jsonParser, addItem)

itemRouter.get('/users',jsonParser,getUser)

itemRouter.post('/users',jsonParser, addUser)



module.exports = itemRouter