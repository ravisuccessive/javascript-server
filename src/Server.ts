import * as express from 'express';
import * as bodyparser from 'body-parser';
import { notFoundRoute , errorHandler } from './libs/routes';
import Database from './libs/Database';
import mainRouter from './Router';

class Server {
    private app;
    constructor(private config) {
        this.app = express();
import * as express from "express";
import * as bodyParser from "body-parser";
import { notFoundHandler, errorHandler } from './libs/routes';
import mainRouter from './router';

    }
   public initBodyParser() {
        this.app.use(bodyparser.json());
    }

    bootstrap() {
        this.initBodyParser();
        this.setupRoutes();
        return this;
    }

   public setupRoutes() {
        this.app.use( '/health-check', ( req, res, next ) => {
            res.send( 'I am Ok' );
            next();
        });
        this.app.use( '/api' , mainRouter );
        this.app.use( notFoundRoute );
        this.app.use( errorHandler );
        return this;
    }
    run() {
        const { app, config: { PORT } } = this;
        Database.open('mongodb://localhost:27017/express-training')
        .then((res) => {
            console.log('Succesfully connected to Mongo');
            app.listen( PORT, (err) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(`App is running on port ${process.env.PORT}`);
                    //Database.disconnect();
                }
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
        .catch(err => console.log(err));
        return this;
    }


}
export default Server;