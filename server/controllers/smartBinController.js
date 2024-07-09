
const {MicroHauler} = require('../models/index.js');

exports.getAllMicroHaulers= async(req,res)=>{
    try{
        const microhaulers= await MicroHauler.findAll();
        return res.json(microhaulers)
    }catch(err){
        return res.json(err)
    }
}
//get county by id
exports.getMicroHaulerId= async(req,res)=>{
    try{
        let microhauler= await MicroHauler.findByPk(req.params.id);
        if(!microhauler){
            return res.status(404).json({"Message": "Unable to find that microhauler with that ID"})
        }
        return res.json(microhauler)
    }catch(err){
        return res.json(err)
    }
}