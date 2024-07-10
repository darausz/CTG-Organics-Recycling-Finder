
const {DropOff} = require('../models/index.js');

exports.getAllDropOffs= async(req,res)=>{
    try{
        const dropoffs= await DropOff.findAll();
        return res.json(dropoffs)
    }catch(err){
        return res.json(err)
    }
}
//get dropOff by id
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
//get droppOff by countyId
exports.getDropOffsByCountyId = async (req, res) => {
 
    try {
        const countyId = req.params.countyId;
       // console.log('County ID:', countyId);

        const dropoffs = await DropOff.findAll({
            where: { countyId: countyId },
            logging: console.log // Log the generated SQL query
        });
      //  console.log('dropOff',dropoffs);
        if(!dropoffs){
            return res.status(404).json({"Message": "Unable to find that dropOff with that County ID"})
        }
        return res.json(dropoffs);
    } catch (err) {
        console.log(err);
        return res.json(err);
    }
};

