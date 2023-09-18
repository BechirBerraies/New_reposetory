const express = require("express")
const app = express()
const cors = require('cors')
require("dotenv").config()
const cookies = require('cookie-parser')

//GLOBAL VARIABLES
const PORT = 8000
const DB = "pirates_db"

app.use(
    express.json() ,express.urlencoded({ extended: true })
    ,cors({credentials:true, origin:"http://localhost:5173"})
    ,cookies()
    
) ;

require('./config/configs.mongoose')(DB)
require('./routes/pirate.routes')(app)
require('./routes/user.routes')(app)


app.listen(PORT,()=>console.log(`>>>SERVER IS RUNNING ON PORT ${PORT}<<<`))