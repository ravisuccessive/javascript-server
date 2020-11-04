import * as express from "express";
import * as bodyParser from "body-parser";
import { notFoundHandler, errorHandler } from './libs/routes';
import mainRouter from './Server';

class Server{
    private app
    constructor(private config){
        this.app=express()
    }
    public initBodyParser(){
        this.app.use(bodyParser.json( {type : 'application/**json'}))
    }
    bootstrap(){
        this.initBodyParser()
        this.setupRouts()
        return this;
    }
    public setupRouts(){
        const { app }=this;
        app.use('/health-check',(req, res)=>{
            console.log("inside Second middleware");
            res.send("I am OK");
        });
        app.use('/api', mainRouter);
        app.use(notFoundHandler);
        app.use(errorHandler);
    
    }

    run(){
        const {app, config:{port}}=this;
        app.listen(port,(err)=>{
            if (err) {
                console.log( err );
                
            }
            console.log(`App is running on port ${port}`);

        })
    }
}
export default Server;