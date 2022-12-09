const jwt=require('jsonwebtoken')
const CustomAPIError=require('../errors/custom-error')
const {BadRequestError}=require('../errors')

//login route code
const login=async(req,res)=>{
    const {username,password}=req.body
    
    if(!username||!password){
        throw new BadRequestError('please provide name and password...')
    }    

    const id=new Date().getDate() //normally provided by database

    //payload should be small
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
        expiresIn: '15d',
      })
    res.status(200).json({ msg: 'user created', token:token })
}



//dashboard route code
const dashboard=async(req,res)=>{
    console.log(req.user);

    const luckyNumber=Math.round(Math.random()*100)
    
    res.status(200).json({
        msg:`hello, ${req.user.username}`,
        secret:`here is your authorised data, your lucky number is ${luckyNumber}`
    })

}

module.exports={
    login,
    dashboard
}