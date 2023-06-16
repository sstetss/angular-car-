const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const  mongoose  = require('mongoose');
const itemRouter = require('./routes/itemRouter')
const {SERVER_PORT,CONNECTION_STRING} = require('./config/config')
const app = express()
app.use(cors())
app.use('/api',itemRouter)

const  main = async()=>{
   await mongoose.connect(CONNECTION_STRING)
   app.listen(SERVER_PORT)
}

main()

process.on("SIGINT", async() => {
      
   await mongoose.disconnect()
   process.exit()
})