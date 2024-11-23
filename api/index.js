import express from 'express';
import dotenv from 'dotenv';
import dbConnect from '../config/database.js';
import practicalManagementRoute from '../routes/practicalManagementRoute.js';

dotenv.config();

const app=express();


dbConnect();

app.use(express.json());

app.use("/api/v1",practicalManagementRoute);

app.get("/",(req,res)=>{
    res.json({
        success:true,
        message:"Server Connected Successfully"
    });
})
const PORT=process.env.PORT || 4000;
app.listen(PORT,()=>{
    console.log(`sever is running at port: ${PORT}`);

})