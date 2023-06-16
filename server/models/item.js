const mongoose = require('mongoose')

const Schema = mongoose.Schema

const itemShema = new Schema({
   id: String,
   title: String,
   info: String,
   image: String,
})

// const userShema = new Schema({
//    email: {
//       type: String,
//       required : true,
//       minlength: 7
//    },
//    password:{
//       type: String,
//       require: true,
//       minlength: 8
//    }
// })

module.exports = mongoose.model('Item',itemShema)
// module.exports = mongoose.model("User", userShema)
