const record = require("../models/record")
const user = require("../models/user")

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
    let date = new Date();
    user.findOne({user_id:req.params.user_id},(err,doc)=>{
        if(err){
            res.send({msg:err})
        }else{
            if(doc.status === "true"){
                status = false
            }else{
                status = true
            }
            user.findOneAndUpdate({user_id:req.params.user_id},{
                status:status
            },{
                new:true
            },(err,doc)=>{
                if(err) res.send({msg:err})
                else{
                    // res.send({
                    //     doc:doc
                    // })
                    record.create({
                    tanggal:date,
                    user_id:req.params.user_id,
                    status:status
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

exports.getRecordLatestById = (req,res)=>{
    record.findOne({user_id:req.params.id},(err,doc)=>{
        if(err) res.send({msg:"Error Occured"})
        else{
            res.send({msg:doc})
        }
    })
}

exports.getRecordByUserId = (req,res)=>{
    record.find({user_id:req.params.user_id},(err,doc)=>{
        if(err) res.send({msg:"Error Occured"})
        else{
            res.send({msg:"success",data:doc})
        }
    })
}

exports.getRecordByStatus = (req,res)=>{
    record.find({status:req.params.status},(err,doc)=>{
        if(err) res.send({msg:"Error Occured"})
        else{
            res.send({msg:"success",data:doc})
        }
    })
}