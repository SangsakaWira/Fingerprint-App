const user = require("../models/user");
const bcrypt = require("bcryptjs");

// maximum salt is 10, don't use 30
const salt = bcrypt.genSaltSync(10);

exports.register = (req, res) => {
  let password = req.body.password;
  let confirm_pass = req.body.confirm_password;
  if(password === confirm_pass){
    user.create({
        username:req.body.username,
        email:req.body.email,
        password:bcrypt.hashSync(password,salt)
    },(err,doc)=>{
        console.log(err)
        if(err){
            res.send({
                msg:err
            })
        }else{
            res.send({
                msg:"Success"
            })
        }
    })
  }else{
    res.send({
        msg:"Password is not Match"
    })
  }
};

exports.login = (req, res) => {
  user.findOne({ $or:[{username:req.body.username}, {email:req.body.email}]},(err, doc) => {
    if (err) {
        res.send({
            msg:err
        })
    } else {
        console.log(doc)
       if(doc !== null){
        if(bcrypt.compareSync(req.body.password,doc.password)){
            req.session.isLoggedIn = true;
            req.session.user_id = doc._id;
            res.send({
                msg:"Success",
                data:doc,
                session:req.session
            })
        }else{
            res.send({
                msg:"Wrong Password"
            })
        }
       }else{
        res.send({
            msg:"No user found"
        })
       }
    }
  });
};

exports.logout = (req,res) =>{
  req.session.destroy(err=>{
    if(err){
      res.redirect("/")
    }
    res.redirect("/user/login")
  })
}

exports.getAllUser = (req,res) =>{
  user.find((err,doc)=>{
    if(err) res.send({msg:"Something is wrong!"})
    res.send({msg:"success",data:doc})
  })
}

exports.getUserById = (req,res) =>{
  user.find({user_id:req.body.user_id},(err,doc)=>{
    if(err) res.send({msg:"Something is Wrong!"})
    res.send({msg:"success",data:doc})
  })
}

