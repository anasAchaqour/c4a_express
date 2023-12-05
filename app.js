const express = require('express')
const app = express()
const port = 5000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.get('/', (req, res) => {
    res.sendFile('./views/index.html',{root: __dirname})
 })

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}/`)
})