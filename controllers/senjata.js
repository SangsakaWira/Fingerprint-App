const senjata = require("../models/senjata")

// NOTES
// router.get("/create",senjataController.create);
// router.get("/updateById/:id",senjataController.updateById);
// router.get("/deleteById/:id",senjataController.deleteById);

// MODEL NOTES
// tipe:String
// user_id:String

exports.create = (req,res)=>{
    senjata.create({
        tipe:req.body.tipe,
        user_id:req.body.user_id
    },(err,doc)=>{
        if(err){
            res.send({
                msg:"Weapon is not created!"
            })
        }else{
            res.send({
                msg:"Success",
                weapon:doc
            })
        }
    })
}

exports.updateById = (req,res)=>{
    
}

exports.deleteById = (req,res)=>{
    
}