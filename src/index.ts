import Server from './Server';
import {configurations} from './config';
console.log("config is ", configurations);
const server=new Server(configurations);
server.bootstrap().run();