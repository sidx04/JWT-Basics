require('dotenv').config()
require('express-async-errors')

const express=require('express')
const app=express()

//routes
const mainRouter=require('./routes/main')

//error middleware
const notFoundMiddleware=require('./middleware/not-found')
const errorHandlerMiddleware=require('./middleware/error-handler')

//middleware
app.use(express.static('./public'))
app.use(express.json())
app.use('/api/v1/', mainRouter)
app.use(errorHandlerMiddleware)
app.use(notFoundMiddleware)

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

startApp();