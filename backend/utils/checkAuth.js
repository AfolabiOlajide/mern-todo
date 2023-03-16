import jwt from "jsonwebtoken";

import createError from "./createError.js";

export default  (req, res, next) => {
    const token = req.cookies.access_token;

    if(!token){
        return next(createError({message: "Unauthorized", status: 401}));
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if(err){
            return next(createError({message: "Invalid Token", status: 401}));
        }else{
            req.user = decoded;
            next();
        }
    })
}