//importiamo express
const express = require('express')
//importiamo express per gestire le rotte 
const router = express.Router()

const figureController = require('../controllers/figureControllers')

router.get('/', figureController.index)


router.get('/', figureController.show)



module.exports = router