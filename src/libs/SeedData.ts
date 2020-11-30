import UserRepository from '../repositories/user/UserRepository';
import * as bcrypt from 'bcrypt';
import { seedData1, seedData2 } from './routes/Constants';

const userRepository: UserRepository = new UserRepository();
export default () => {
    userRepository.countData()
        .then((res) => {
            if (res === 0) {
                console.log('Inserting Data');
                userRepository.create({
                    name: 'Head-Trainer',
                    email: 'head.trainer@successive.tech',
                    role: 'head-trainer',
                    password: 'helloworld456'
                });
                userRepository.create({
                    name: 'Trainer',
                    email: 'trainer@successive.tech',
                    role: 'trainer',
                    password: 'helloworld123'
                });
            }
        })
        .catch((err) => console.log(err));
};
