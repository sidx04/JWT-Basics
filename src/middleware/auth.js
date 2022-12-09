const jwt=require('jsonwebtoken')
const {UnauthenticatedError}=require('../errors/')

const authMiddleware=async(req,res,next)=>{
    const authHeader=req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new UnauthenticatedError('no token provided')
    }

    const token=authHeader.split(' ')[1]
    // console.log(token);

    try {
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        //console.log(decoded);
        const {id,username}=decoded
        req.user={id,username}
        next()
    }
    catch (error) {
        throw new UnauthenticatedError('not authorised to access this route')
    }
    console.log(req.headers.authorization);
} 

module.exports={
    authMiddleware
}

