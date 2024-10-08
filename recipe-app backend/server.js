const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');
const Recipe=require("./Recipe");


const ConnectionString="mongodb+srv://EshaDubal:Esha%40123@cluster0.vjvzn.mongodb.net/Recipee_api"
mongoose.connect(ConnectionString).then(()=>{
    const express=require('express');
    const app=express();
    
    
    app.use(bodyParser.urlencoded());
    app.use(cors());
   
    //GET ALL
    app.get('/recipes',async(req,res)=>{
        const ans=await Recipe.find();
        res.send(ans);
        
    });

    //GET BY ID

    app.get('/recipes/:_id',async(req,res)=>{
        const ans=await Recipe.findOne({id:req.params._id});
        res.send(ans);
    })

    //POST

    app.post('/recipes',async(req,res)=>{
        const Rec=new Recipe({...req.body});
        const ans=await Rec.save();
        res.send(ans);
    })



    app.listen('8080',()=>{
        console.log("Server Started");
    })
})