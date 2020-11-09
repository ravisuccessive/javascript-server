import * as express from 'express';
import * as bodyparser from 'body-parser';
import { notFoundRoute , errorHandler } from './libs/routes';
import Database from './libs/Database';
import mainRouter from './Router';

class Server {
    private app;
    constructor(private config) {
        this.app = express();
    }
   
   bootstrap() {
        this.initBodyParser();
        this.setupRoutes();
        return this;
    }
    public initBodyParser() {
        this.app.use(bodyparser.json());
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
    run(){ 
        const { app, config: { port } } = this;
        Database.open('mongodb://localhost:27017/express-training')
        .then((res) => {
            console.log('Succesfully connected to Mongo');
            app.listen( port, (err) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(`App is running on port ${ port }`);
               
                }
            });
        
        });
    }
}
      export default Server;