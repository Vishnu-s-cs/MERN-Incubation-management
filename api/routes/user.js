const User = require('../model/user')
const {verifyToken,verifyTokenAndAuthorization, verifyTokenAndAdmin}=require('./verifyToken')
const userController=require('../controller/userController')
const router=require('express').Router()


//update user
router.put("/:id",verifyTokenAndAuthorization,userController.user_Update)

//delete

router.delete('/:id',verifyTokenAndAuthorization,userController.delete_user)

//get user

router.get('/find/:id',verifyTokenAndAdmin,userController.get_user)

//get all users

router.get('/getUsers',userController.all_user)



module.exports=router