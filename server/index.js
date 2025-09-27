const express = require('express')
const cors = require('cors')
const sub = require('./routers/category')
const app = express()
const path = require('path')

app.use(express.json())
app.use(cors())

app.use(express.static(path.join(__dirname, '/build')))

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.use('/sub', sub)

const port = 5000
app.listen(port, () =>
  console.log(`Express server is running on localhost:${port}`)
)
