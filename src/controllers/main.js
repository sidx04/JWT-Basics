const jwt=require('jsonwebtoken')
const CustomAPIError=require('../errors/custom-error')

const login=async(req,res)=>{
    const {username,password}=req.body
    
    if(!username||!password){
        throw new CustomAPIError('please provide name and password...',400)
    }    

    const id=new Date().getDate() //normally provided by database

    //payload should be small
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
        expiresIn: '15d',
      })
    res.status(200).json({ msg: 'user created', token:token })
}

const dashboard=async(req,res)=>{
    const luckyNumber=Math.round(Math.random()*100)
    res.status(200).json({
        msg:`hello, abcd`,
        secret:`here is your authorised data, your lucky number is ${luckyNumber}`
    })
}

module.exports={
    login,
    dashboard
}