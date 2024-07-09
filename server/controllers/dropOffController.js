
const {DropOff} = require('../models/index.js');

exports.getAllDropOffs= async(req,res)=>{
    try{
        const dropoffs= await DropOff.findAll();
        return res.json(dropoffs)
    }catch(err){
        return res.json(err)
    }
}
//get county by id
exports.getDropOffId= async(req,res)=>{
    try{
        let dropOff= await DropOff.findByPk(req.params.id);
        if(!dropOff){
            return res.status(404).json({"Message": "Unable to find that dropOff with that ID"})
        }
        return res.json(dropOff)
    }catch(err){
        return res.json(err)
    }
}