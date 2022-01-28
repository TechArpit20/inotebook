const connectDB=require('./db')
const express = require('express')
const app = express()
const port = 3000


connectDB();

app.get('/', (req, res) => {
  res.send('Hello Arpit There!')
})

app.use('/api/auth',require('./routes/auth'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})