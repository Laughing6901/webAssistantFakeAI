const express = require('express')
const app = express()
const port = process.env.PORT || 5500;
var path = require('path');

app.use(express.static('files'))
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;