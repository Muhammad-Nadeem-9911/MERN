const app = require("./app")

const connectDB= require("./config/database")
const cloudinary = require("cloudinary")

process.on("uncaughtException",err=>{
    console.log(`Error: ${err.message}`)
    console.log("Shutting Down the server due to uncaughtException")

    server.close(()=>{
        process.exit(1);
    })
})

//Config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "backend/config/config.env" });
  }

// Connecting Database
connectDB();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

const server= app.listen(process.env.PORT,()=>{
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
})



//Unhandled Promise Rejection

process.on("unhandledRejection",err=>{
    console.log(`Error: ${err.message}`)
    console.log("Shutting Down the server due to unhandled Promise rejection")
    process.exit(1);
    
})