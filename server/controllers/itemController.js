const Item = require('../models/item')
const User = require('../models/user')
const jwt = require('jsonwebtoken');

const getItems = async (req,res)=>{
   const items = await Item.find()
   res.json(items)

}
// Знайти 1
const getOneItem = async (req,res)=>{
   const id = req.params.id

   try {
       const item = await Item.findById(id)
       if(item)
           return res.status(200).json(item)

       return res.status(404).json({
               'message': "No found item"
           })

   }
   catch(err) {
       return res.status(404).json({
           'message': "wrong id format"
       })
   }
}
// Видалення
const deleteItem = async (req,res)=>{
    const id = req.params.id
    try {
        const item = await Item.findByIdAndDelete(id)
        if(item)
            return res.status(200).json(item)
 
        return res.status(404).json({
                'message': "No found item"
            })
 
    }
    catch(err) {
        return res.status(404).json({
            'message': "wrong id format"
        })
    }
}
// Добавелння 
const addItem = async (req,res)=>{
   // console.log(req.body)

   const {title, info,image,id} = req.body

   try {
       const result = await Item.create({title, info,image,id})
       return res.json(result)
   }
   catch(err) {
       res.json(err.message)
   }
}

const editItem = async (req,res)=>{
    const id = req.params.id
    const {title, info,image} = req.body

   try {
       const item = await Item.findByIdAndUpdate(id, {title, info,image})
       if(item)
           return res.status(200).json(item)

       return res.status(404).json({
               'message': "No found item"
           })

   }
   catch(err) {
       return res.status(404).json({
           'message': "wrong id format"
       })
   }
}
// User
const getUser = async (req, res) =>{
    const user = await User.find()
     
     if(user)
         return res.json(user)
 
     res.json({
         'message': "No products"
     })
 }
 const addUser = async (req,res)=>{
    // console.log(req.body)
 
    const {email, password} = req.body
 
    try {
        const result = await User.create({email, password})
        return res.json(result)
    }
    catch(err) {
        res.json(err.message)
    }
 } 

module.exports = {
   getItems  , getOneItem , addItem, deleteItem ,editItem, getUser,addUser
}

