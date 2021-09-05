const contact= require('../models/contact')
exports.addUser= async (req,res)=>{
    try {
        const {name, age, email}=req.body
        const found= await contact.findOne({email})
        if(found){
            return res.status(400).send({msg:'user aleardy added'})
        }
        const newcontact=  new contact(req.body)
        await newcontact.save()
        res.status(200).send({msg:'user added', newcontact})
    } catch (error) {
        res.status(500).send({msg:'could not add user'})
    }
}

// async (req,res)=>{
//     const {name, age, email}= req.body
//     try {
//             const found= await contact.findOne({email})
//             if(found) return res.status(400).send('email exist already')


//         const newcontact= new contact(req.body)
//          await newcontact.save()
//         res.status(200).send({msg:'user added', newcontact})
//     } catch (error) {
//         res.status(500).send({msg: 'user not added'})
//     }
// }

exports.getAllUsers=async (req,res)=>{

    try {
        const contacts = await contact.find();
        res.status(200).send({msg:'list of users', contacts})
    } catch (error) {
        res.status(500).send({msg: 'could not get list of users'})

    }
}
exports.User= async (req,res)=>{
    const {ID}=req.params
    try {
        const user= await contact.findById(ID)
        res.status(200).send({msg:'user found', user})
    } catch (error) {
        res.status(500).send({msg: 'could not find user'})
    }
}



exports.updatedUser= async (req,res)=>{
    const {ID}=req.params
    const {name, age, email}=req.body
    try {
        const updated= await contact.findByIdAndUpdate(ID, {$set:{name,email,age}}) //other option
        res.status(200).send({msg:'user updated', updated}) //updated || contact
    } catch (error) {
        res.status(500).send({msg: 'could not update'})   
    }
}
exports.deletedUser=async (req,res)=>{
    const {ID}=req.params
    try {
        const deletedUser= await contact.findByIdAndRemove(ID)
        res.status(200).send({msg:'user deleted'})
    } catch (error) {
        res.status(500).send({msg: 'could not find user'})  
    }
}
