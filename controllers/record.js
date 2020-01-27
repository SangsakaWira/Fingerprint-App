const record = require("../models/record")

// NOTES
// router.get("/create",senjataController.create);
// router.get("/updateById/:id",senjataController.updateById);
// router.get("/deleteById/:id",senjataController.deleteById);

// MODEL NOTES
// tanggal:String,
// status:String,
// user_id:String,
// pukul:String

exports.create = (req,res)=>{
    var date = new Date();
    record.create({
        tanggal:date,
        user_id:req.params.user_id
    },(err,doc)=>{
        if(err){
            console.log(err)
            res.send({
                msg:"Record is not created!"
            })
        }else{
            res.send({
                msg:"Record Created",
                data:doc
            })
        }
    })
}

exports.updateById = (req,res)=>{
    
}

exports.deleteById = (req,res)=>{
    
}

exports.getAllRecords = (req,res)=>{
    record.find((err,doc)=>{
        if(err){
            res.send({
                msg:"Error occured no records sent"
            })
        }else{
            res.send({
                data:doc
            })
        }
    })
}