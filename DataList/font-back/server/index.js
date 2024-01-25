const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

let data = {
    name:'Thawitchai',
    age:22
}

app.use(cors())

app.get('/', (req, res) => res.json(data))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))