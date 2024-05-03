const express = require('express')
const router= express.Router() 

router.post('/', (req,res)=>{ 
    const {name} = req.body // Content-Type application/x-www-form-urlencoded 
    if(name){
      return  res.status(200).send(`Welcome ${name}, How are you ?`)
    } 
    res.status(401).send(`Invalid credentials`) 
})

module.exports = router 