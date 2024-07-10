
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

//get droppOff by countyId
exports.getMicroHaulersByCountyId = async (req, res) => {
    try{
        const countyIdreponse= req.params.countyId;
        const microhaulers= await MicroHauler.findAll({
            where:{
                countyId: countyIdreponse
            }
        });
        if(!microhaulers){
            return res.status(404).json({"Message": "Unable to find microhaulers with that County ID"})
        }
        return res.json(microhaulers);
    }catch(err){
        console.log(err);
        return res.json(err);
    }
    
};