import {Request, Response, NextFunction} from 'express'

export default ((err: IError, req : Request,  res: Response, next:NextFunction) => {
    const { error = "Somthing went wrong", status = 500, message ='Error'} = err;  
    const timeStamp = new Date();  
    res.status(status).json(
           {
               error,
               status,
               message,
               timeStamp,
    
           }
    )
        });