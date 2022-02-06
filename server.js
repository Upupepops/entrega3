const express = require('express')
const app = express()
const Contenedor = require('./contenedor')
const instance = new Contenedor('./data.json')
const path = require('path')
const fs = require('fs')

app.use(express.json())

// Root page
app.get('/', (req, res) => {
  res.send('Entrega #3 - Curso Backend 17070')
})

// Products page
app.get('/productos', async (req, res) => {
  const book = await instance.getAll()
  res.send(JSON.stringify(book))
})

// Get random product page
app.get('/productosRandom', async (req, res) => {
  const data = await instance.getAll()
  const bookRandom = Math.floor(Math.random()*data.length);
  var random = data[bookRandom];
  res.send(JSON.stringify(random))
})

//Port information ↓
const PORT = process.env.PORT || 8080
const server = app.listen(PORT,() => {
  console.log(`Listening to port: ${PORT}`)
})
// Error management
server.on("error", (err) => {
  console.log(`Error: ${err}`)
})