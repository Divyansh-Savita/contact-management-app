const { constants } = require("../constants");

// const {constants}=req
const errorHandler=(err,req,res,next)=>{
const statusCode=res.statusCode?res.statusCode:500;
switch (statusCode) {
    case constants.VALIDATION_ERROR:
        res.json(
            {
                title:"validation failed",
                message:err.message,
                stackTrace:err.stack
            }
        )
        break;
    
        case constants.NOT_FOUND:
            res.json(
                {
                    title:"Not found",
                    message:err.message,
                    stackTrace:err.stack
                }
            )
            break;

            case constants.UNAUTHORIZED:
                res.json(
                    {
                        title:"UNAUTHORIZED",
                        message:err.message,
                        stackTrace:err.stack
                    }
                )
                break;
            case constants.FORBIDDEN:
                    res.json(
                        {
                            title:"FORBIDDEN",
                            message:err.message,
                            stackTrace:err.stack
                        }
                )
                break;
            case constants.SERVER_ERROR:
                    res.json(
                        {
                            title:"SERVER_ERROR",
                            message:err.message,
                            stackTrace:err.stack
                        }
                )
                break;
    default:
        console.log("No error , All good");
        
        break;
}

}
module.exports=errorHandler;