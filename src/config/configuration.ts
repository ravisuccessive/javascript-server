import { IConfig } from './IConfig';
import { config } from 'dotenv';
config();
const envNames = config().parsed;
const configurations = Object.freeze({
port: envNames.PORT,
nodeEnv: envNames.NODE_ENV,
secretKey: envNames.SECRET_KEY
});
export default configurations;