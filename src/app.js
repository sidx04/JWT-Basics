require('dotenv').config()
require('express-async-errors')

const express=require('express')
const app=express()




//port
const port=process.env.PORT||3000;

const startApp=async()=>{
    try {
        app.listen(port,()=>{
            console.log(`server is listening on port ${port}....`);
        })
    } catch (error) {
        console.log(error);
    }
}

startApp()