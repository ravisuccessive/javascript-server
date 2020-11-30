import * as express from 'express';
import * as bodyparser from 'body-parser';
import { notFoundRoute, errorHandler } from './libs/routes';
import Database from './libs/Database';
import mainRouter from './Router';
import * as swaggerJsDoc from 'swagger-jsdoc';
import * as swaggerUI from 'swagger-ui-express';

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
    initSwagger = () => {
        const options = {
            definition: {
                info: {
                    title: 'JavaScript-Server API Swagger',
                    version: '1.0.0',
                },
                securityDefinitions: {
                    Bearer: {
                        type: 'apiKey',
                        name: 'Authorization',
                        in: 'headers'
                    }
                }
            },
            basePath: '/api',
            swagger: '4.1',
            apis: ['./src/controllers/**/routes.ts'],
        };
        const swaggerSpec = swaggerJsDoc(options);
        return swaggerSpec;
    }

    public setupRoutes() {
        this.app.use('/health-check', (req, res, next) => {
            res.send('I am Ok');
            next();
        });
        this.app.use('/api', mainRouter);
        this.app.use('/swagger', swaggerUI.serve, swaggerUI.setup(this.initSwagger()));
        this.app.use(notFoundRoute);
        this.app.use(errorHandler);
        return this;
    }
    run() {
        const { app, config: { port, mongoURL } } = this;
        Database.open(mongoURL)
            .then((res) => {
                console.log('Succesfully connected to Mongo');
                app.listen(port, (err) => {
                    if (err) {
                        console.log(err);
                        Database.disconnect();
                    }
                    else {
                        console.log(`App is running on port ${port}`);
                    }
                });
            })
            .catch(err => console.log(err));
        return this;
    }
}
export default Server;