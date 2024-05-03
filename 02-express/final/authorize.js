const authorize = (req,res,next)=>{ 
  const {user} = req.query 
  if(user === 'Aparna'){ 
    req.user= {name:'Uday', id:'1039'} 
    next() 
  } 
  else{
    res.status(401).send('Unauthorized request :(') 
  }
}
module.exports = authorize 