const State = require('../models/state.js');
const {Op}= require('sequelize');

exports.getAllStates=async(req,res)=>{  
   // console.log(new State());
    try{
        
       const states= await State.findAll();
        return res.json(states)
    }catch(err){
        console.log(err)
        return res.json(err)
    }
}
//get state by ID
exports.getStateId= async(req,res)=>{
    try{
        let state=  await State.findByPk(req.params.id);
        if(!state){
            return res.status(404).json({"Message":"Unable to find state with that ID"})
        }
        return res.json(state)
    }catch(err){
        console.log(err)
        return res.json(err)
    }
}

exports.createState= async(req,res)=>{
    const {name,abbreviation}=req.body 
    try{
        let state= await State.create({name,abbreviation})
        if(!state){
            return res.status(404).json({"Message":" Unable to create state"})
        }
        return res.json()
    }catch(err){
        console.log(err)
        return res.json(err)

    }
};
