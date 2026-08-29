const { validateToken } = require("../services/authentication");

function checkForAuthentication(cookiName){
    return (req, res, next) => {
       const tokenValue = req.cookies[cookiName]; 
       if(!tokenValue){
        return next();
       }

       try {
        const userPayload = validateToken(tokenValue);
        req.user = userPayload ;
       } catch (error) {
        
       }
       return next();
    }

}

module.exports = {
    checkForAuthentication,
}