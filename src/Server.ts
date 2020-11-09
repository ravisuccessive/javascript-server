import * as express from 'express';
import * as bodyparser from 'body-parser';
import { notFoundRoute , errorHandler } from './libs/routes';
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
        // const { app } = this;
        this.app.use( '/health-check', ( req, res, next ) => {
            res.send( 'I am Ok' );
            next();
        });
        this.app.use( '/api' , mainRouter );
        this.app.use( notFoundRoute );
        this.app.use( errorHandler );
        return this;
    }
    run () {
        const { app , config : {port}} = this;
        app.listen( port , ( err ) => {
            if ( err ) {
            console.log( err );
            }
            console.log( `App is running on port ${ port }` );
        });

    }


}
export default Server;