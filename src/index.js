// import mongoose  from "mongoose";
// import { DB_Name } from "./constants";
import { app } from './app.js'
import connectDB from './db/index.js'
import dotenv from 'dotenv'
 
/*  
import express from 'express';
const app=express();
 ;( async ()=>{
    try {
    await  mongoose.connect(`${process.env.MONGOBD_URL}/${DB_Name}`)   
    app.on("error",(error)=>{
        console.log("ERROR : ",error)
        throw error
    })
    app.listen(process.env.PORT,()=>{
        console.log(`App  is listening on port 
            ${process.env.PORT}`)
    })
    } catch (error) {
          console.log("ERROR :",error)
          throw error
    }
 })()
    */

 dotenv.config({
  path :'./.env'
 })
 connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`server is running at port : ${process.env.PORT}`)
    })
})
.catch((error)=>{
 console.log("MONGOBD connection faid !!! : ",error)
}) 