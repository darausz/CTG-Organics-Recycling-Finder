const express= require('express')

const router=express.Router()
const dropOffController= require('../controllers/dropOffController.js')

router.get('/',dropOffController.getAllDropOffs);

router.get('/:id',dropOffController.getAllDropOffs);
module.exports = router;