const express = require('express')
const app = express()
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const todoRoutes = require('./routes/todos')
const PORT = 3000

require('dotenv').config({path: './config/.env'})

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.use('/', homeRoutes)
app.use('/todos', todoRoutes)

app.listen(process.env.PORT || PORT, () => {
  console.log(`server running on port ${PORT}`)
})

