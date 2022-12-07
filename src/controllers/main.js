const login=async(req,res)=>{
    res.send('login test')
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