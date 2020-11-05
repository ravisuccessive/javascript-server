import { Schema } from 'mongoose';
import * as mongoose from 'mongoose';

class UserSchema extends mongoose.Schema {

    constructor(collections: any) {
        const baseSchema = Object.assign({
            id: String,
            name: String,
            role: String,
            password: String,
        });
        super(baseSchema, collections);
    }

}
export default UserSchema;
