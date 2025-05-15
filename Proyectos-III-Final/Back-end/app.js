const express = require("express")
const cors = require("cors")
require("dotenv").config()
const morganBody = require("morgan-body")
const dbConnect = require("./config/mongoDB")
const loggerStream = require("./utils/handleLogger")


const app = express()

app.use(cors()) 
app.use(express.json())

app.use(express.static("storage"))

/*morganBody(app, { 
    noColors: true, 
    skip: function(req, res) { 
        return res.statusCode < 400
    },
    stream: loggerStream
})*/

app.use("/api", require("./routes/index"))

const port = process.env.PORT || 443

app.listen(port, () => {
    console.log("Servidor escuchando en el puerto " + port)
    dbConnect()
})