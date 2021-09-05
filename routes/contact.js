
const express= require ('express');
const router= express.Router();
const contact=require('../models/contact')
const {addUser, getAllUsers,updatedUser,deletedUser, User}=require('../controllers/contact')

router.post('/',addUser)

router.get('/',getAllUsers )

router.get('/:ID', User)

router.put('/:ID',updatedUser)

router.delete('/:ID', deletedUser)

module.exports=router;