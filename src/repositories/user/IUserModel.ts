import { Mongoose } from 'mongoose';
import * as mongoose from 'mongoose';

export default interface IUserModel extends mongoose.Document {
    id: string;
    name: string;
    role: string;
    password: string;
}
