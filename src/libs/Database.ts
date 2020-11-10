import * as mongoose from 'mongoose';


class database {
    static open(mongoURL) {
        return new Promise((resolve, reject) => {
        console.log('Inside open method');
        mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
            if (err) {
                console.log(err);
                reject(err);
                return;
            }
            resolve();
            console.log('Succesfully connected to Mongo');
        });
     });
    }
    static disconnect() {
        console.log('Inside Disconnect method');
        mongoose.disconnect();
    }
}
export default database;