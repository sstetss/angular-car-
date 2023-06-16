const mongoose = require('mongoose')

const Schema = mongoose.Schema
const userShema = new Schema({
   email: {
      type: String,
      required : true,
      minlength: 7
   },
   password:{
      type: String,
      require: true,
      minlength: 8
   }
})

module.exports = mongoose.model("User", userShema)
