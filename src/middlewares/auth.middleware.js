const jwt = require("jsonwebtoken");

module.exports = (req,res,next)=>{ 
    const authHeader = req.header("Authorization");
    const token = authHeader && authHeader.split(" ")[1];

    if(!token) return res.status(401).json({message: "access denied"});

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(403).json({message:"invalid token"});
    }
    
};