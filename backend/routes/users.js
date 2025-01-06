const router = require("express").Router();
const User = require("../models/user");
const bcrypt= require("bcryptjs");
const jwt = require("jsonwebtoken");
const {authenticateToken} = require('./userAuth')


//Sign up
router.post("/sign-up",async (req, res)=>{
    try{
        const {username,email,password,address} = req.body;

        //Check username length is more than 4
        if(username.length <= 4){
            return res.status(400).json({message:"Username length should be greater than 4"})
        }
        //Check username already exits?
        const existingUsername = await User.findOne({ username: username});
        if(existingUsername){
            return res.status(400).json({message:"Username already exits"});
        }
         //Check email already exits?
         const existingEmail = await User.findOne({ email: email});
         if(existingEmail){
             return res.status(400).json({message:"Email already exits"});
         }

         //Check password's length

         if(password.lenght <= 5){
            return res.status(400).json({message:"Password's length should be greater than 5"})
         }
         const hashpass =await bcrypt.hash(password, 10);

         const newUser = new User({
            username: username,
            email:email,
            password:hashpass,
            address:address
        });
        await newUser.save();
        return res.status(200).json({message :"SignUp Successfully"})
    }catch (error) {
        res.status(500).json({message:"Internal server error"})
    }
})

//sign In
router.post("/sign-in",async (req, res)=>{
    try{
        const {username,password} = req.body;

        const existingUser = await User.findOne({ username });
        if(!existingUser){
            res.status(400).json({message:"Invalid credentials"})
        }
        await bcrypt.compare(password,existingUser.password , (err,data)=>{
            if (data){
                const authClaims = [
                    {name:existingUser.username},
                    {role:existingUser.username},
                ];
                const token = jwt.sign({authClaims},"bookstore123",{expiresIn:"30d"})
                res.status(200).json({id:existingUser._id , 
                    role: existingUser.role, 
                    token:token,
                });
            }
            else{
                res.status(400).json({message:"Invalid credentials"})
            }
        })
    }catch (error) {
        res.status(500).json({message:"Internal server error"})
    }
})

//get-user Information
router.get("/get-user",authenticateToken ,async (req,res)=>{
    try{
        const {id} = req.headers;
        const data = await User.findOne(id);
        return res.status(200).json(data);
    }catch (err) { res.status(500).json({message:"Internal server error"})
}
})

module.exports = router;
