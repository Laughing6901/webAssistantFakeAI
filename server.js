const express = require('express')
const app = express()
const port = 5500

app.use(express.static('public'))
app.use(express.static('files'))

app.get('/', (req, res) => {
  res.sendFile('./public/index.html');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})