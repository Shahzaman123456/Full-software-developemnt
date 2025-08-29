import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

const connectDB= async ()=>{
    try {
       const connectionIntsance= await mongoose.connect(`${process.env.MONGOBD_URL}/${DB_Name}`)
       console.log(`\n MONGOBD connect !! DB Host : ${connectionIntsance.connection.host}`)
    } catch (error) {
         console.log("MONGOOSE DB  connection error : ",error)
         process.exit(1)
    }
}
export default connectDB 