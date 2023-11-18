const express=require('express')
const connect =require('./DBconnection/dbconn')

const app=express()
app.use(express.json())
PORT= process.env.PORT || 8080
connect().then(()=>{
    try {
        app.listen(PORT,()=>{
            console.log(`server connected ${PORT}`);
        })
    } catch (error) {
        console.log("connection failedsd");
    }
})
.catch(error=>{
    console.log('connection failed');
})

