let {people} = require('../data')  

const getPeople = (req,res)=>{
    res.status(200).json({sucess:true, data:people})  
}
const createPerson = (req,res)=>{  
    const {name}= req.body 
    if(!name){
        return res.status(400).json({success:false, msg:'Invalid Credentials'}) 
    } 
    res.status(201).json({success:true, person:name, age:19}) 
}

const createPersonPostman = (req,res)=>{ 
    const {nameVal}= req.body 
    if(!nameVal){ 
        return res.status(400).json({success:false, msg:'Please provide name value'}) 
    }
    res.status(201).json({success:true, data:[...people, {id:6, name:nameVal}]}) 
}

const updatePerson = (req,res)=>{
    const {id} = req.params
    const {name} = req.body 
    const person = people.find((person)=>{ 
        return person.id === Number(id) 
    })
    if(!person){
       return res.status(404).json({success:false, msg:`There is no data with id ${id}`}) 
    }
    else{ 
        const newPeople = people.map((person)=>{ 
          //  return (person.id ===  Number(id)) ? {...person, name:name} : person ; 
            if(person.id === Number(id)){
                person.name = name; 
            }
            return person 
        })   
        return res.status(200).json({success:true, data:newPeople}) 
    }
}

const deletePerson = (req,res)=>{ 
    const person = people.find((person)=>{
        return person.id === Number(req.params.id) 
    })
    if(!person){
        return res.status(400).json({success:false, msg:`No person with id ${req.params.id}`}) 
    }
    const np= people.filter((person)=>{
       return person.id !== Number(req.params.id) 
    }) 
    res.status(200).json({success:true, data:np, status:'Deleted'}) 
}

module.exports = {getPeople, createPerson, createPersonPostman, updatePerson, deletePerson} 