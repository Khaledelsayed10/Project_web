const express = require("express");
const mongoose = require("mongoose");
const bodyParser=require("body-parser")

const app = express();
const port = 3000;

app.use(bodyParser.json());

const User = require("./models/userSchema")


mongoose.connect("mongodb://0.0.0.0:27017/space")
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  }).catch((err) => {
    console.log(err)
  })




app.post("/signUp",async(req,res) => {

  const password = req.body.password
  const confirmPassword = req.body.confirmPassword

  if (confirmPassword !== password) {
    return res.send({
         message: 'please enter a valid password and match with confirm password',
       });
 }
   const user = await User.create(req.body)

   
   return res.status(200).send({
    message: 'successful register',
    data:user
  });

})


app.post("/login", async(req, res) => {
  
    const email = req.body.email
    const password = req.body.password

    if (!email || !password) {
     return   res.send({
            message: 'please enter a valid email or password',
          });
    }
    const result = await User.findOne({ email })
    if (!result || result.password != password) {
      return  res.send({
            message: 'incorrect email or password',
          });
    }
    res.send({
        message: 'successful login',
      });
});


app.get("/all-user", async(req, res) => {
    const result = await User.find().select("-password")
    if(!result){
      return  res.send({
            message: 'no user found',
          });
    }else{
      return  res.send({
            status: 'success',
            data: result,
          });
    }
});


  app.get("/user/:id", async(req, res) => {
    const user = await User.findById(req.params.id)
    if(!user){
       return res.send({
            message: 'no user found',
          });
    }else{
      return res.send({
            status: 'success',
            data: user,
          });
    }
  });



app.use((req, res) => {
  res.status(404).send("Sorry can't find that!");
});

