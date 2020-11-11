import * as mongoose from 'mongoose';
import SeedData from './SeedData';

 class database {
    static open(mongoURL) {
        return new Promise((resolve, reject) => {
       // console.log('Inside open method');
       mongoose.set('useUnifiedTopology', true);
       mongoose.set('useNewUrlParser', true);
       mongoose.set('useCreateIndex', true);
       mongoose.connect(mongoURL, (err) => {
            if (err) {
                console.log(err);
                reject(err);
                return;
            }
            SeedData();
            resolve();
            console.log('Succesfully connected to Mongo');
        });
     });
    }
    static disconnect() {
        console.log('Inside Disconnect method');
        mongoose.disconnect(err =>{
            if(err) {
                console.log(err);
            }
        });
    }
}
export default database;