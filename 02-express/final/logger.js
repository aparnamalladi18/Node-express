
const logger = (req,res,next)=>{ 
    console.log(req.method)
    console.log(req.url)
    const date= new Date().getFullYear()
    console.log(date)   
    console.log(req.user)  
    next() 
}
module.exports = logger 