const express = require('express')
const app = express()
const port = 3000

const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
    let title = {
        title: 'Home Page',
        link: 'https://www.facebook.com/profile.php?id=100076680485730'
    }
    res.send(title)
})

app.get('/product', (req, res) => {
    res.send('<h1>Products</h1>')
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))