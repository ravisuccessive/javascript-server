import * as express from 'express';
import * as bodyparser from 'body-parser';
import { notFoundRoute, errorHandler } from './libs/routes';
import Database from './libs/Database';
import mainRouter from './Router';
import * as cors from 'cors';

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
        this.app.use((cors()));
        this.app.use('/api', mainRouter);
        this.app.use(notFoundRoute);
        this.app.use(errorHandler);
        return this;
    }
    run() {
        const { app, config: { port, mongoURL} } = this;
        Database.open(mongoURL)
        .then((res) => {
        console.log('Succesfully connected to Mongo');  
            app.listen( port, (err) => {
                if (err) {
                    console.log(err);
                    Database.disconnect();
                }
                else {
                    console.log(`App is running on port ${ port }`);
                }
            });
        })
        .catch(err => console.log(err));
        return this;
    }
}
      export default Server;