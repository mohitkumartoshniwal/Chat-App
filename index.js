const express =require('express');
const socket=require('socket.io');

const app=express()

const server=app.listen(4000, (req,res)=>{
    console.log("listening on port 4000")
})

app.use(express.static('public'))


//socket setup
const io= socket(server);

io.on('connection',(socket)=>{

    console.log(`made socket connection ${socket.id}`)
    
})

