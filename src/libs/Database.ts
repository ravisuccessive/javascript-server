import * as mongoose from 'mongoose';
import SeedData from './SeedData';

class database {
    static open(mongoURL) {
        return new Promise((resolve, reject) => {
            const value = {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
            };
            mongoose.connect(mongoURL, value, (err) => {
                if (err) {
                    console.log(err);
                    reject(err);
                    return;
                }
                SeedData();
                resolve();
                console.log('Database Connected');
            });
        });
    }
    static disconnect() {
        console.log('Inside Disconnect method');
        mongoose.disconnect(err => {
            if (err) {
                console.log(err);
            }
            console.log('Database Disconnected');
        });
    }
}
export default database;