const express = require('express')
const app = express()
const cors = require('cors')
var bodyParser = require('body-parser')
const port = 3000


require('./database')
app.use(express.json())
//body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())


app.get('/', (req, res) => {
  res.send('Hello World!')
})

const userRouter = require('./routes/users')

app.use('/users', userRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

