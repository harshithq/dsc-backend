const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/fixItDB'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected... !')
})

app.use(express.json())


const listingsRouter = require('./routes/listings')
app.use('/listings',listingsRouter)

const usersRouter = require('./routes/users')
app.use('/users',usersRouter)

const categorysRouter = require('./routes/categorys')
app.use('/categorys',categorysRouter)

app.listen(9000, () => {
    console.log('Server started')
}) 