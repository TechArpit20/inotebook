const conn=require('./db')
const express = require('express')
const app = express()
const port = 3000

conn();

app.use(express.json()); // If we want to use the middleware, then we have to use this middleware to get the json format from the body


app.get('/', (req, res) => {
  res.send('Hello Arpit There!')
})

app.use('/api/auth',require('./routes/auth'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})