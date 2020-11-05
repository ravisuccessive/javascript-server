import Server from './Server';
import {configurations} from './config';
console.log("config is ", configurations);

import configurations from './config/configuration';


const server=new Server(configurations);
server.bootstrap().run();