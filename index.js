require('dotenv').config()
const express = require('express')
const massive = require('massive')
const products_controller= require("./products_controller")

const app = express()
const {server_port CONNECTION_STRING} = process.env

massive(connection_string)
.then(dbInsance =>{
    app.set("db",dbInsance)
})

.catch(err=> console.log(err))

app.use(express.json(()

app.post('/api/products', products_controller.create)
app.get('/api/prodcuts/:id', products_controller.getAll)
app.get('/api/products/:id', products_controller.update)
app.delete('/api/products/id',products_controller.delete)




app.listen(server_port,() => {
console.log(`Server listening on port ${server_port}.`)

})







