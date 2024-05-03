// console.log('Express project') 

const express = require('express')
const app= express()


app.use(express.static('./methods-public')) 

app.use(express.urlencoded({extended:false})) 

app.use(express.json()) 

const people = require('./routes/people') 
const auth = require('./routes/auth') 

// app.use('/api/people', people) 
app.use('/login', auth) 

app.listen(5000, ()=>{ 
    console.log('Server listening to port 5000....')
})  
