import { Request, Response, NextFunction } from 'express';
import config  from './validation';
import * as jwt from 'jsonwebtoken';
import UserRepositories from '../../repositories/user/UserRepository';
import { payLoad } from '../../libs/routes/Constants';
import IRequest from '../../IRequest';
import * as bcrypt from 'bcrypt';
import Validation from './validation';

class UserController {
    static instance: UserController;

    static getInstance() {
        if (UserController.instance) {
            return UserController.instance;
        }

        UserController.instance = new UserController();
        return UserController.instance;
    }

    profile(req: Request, res: Response, next: NextFunction ) {
        try {
            res.status(200).send({
                message: 'Profile fetched successfully',
                data: [res.locals.userData],
                status: 'success',
            });
        } catch (err) {
            console.log('error is ', err);
        }
    }
    async login(req: Request, res: Response, next: NextFunction ) {
        try {
            const userRepositories = new UserRepositories();
            const { email, password } = req.body;
            Object.assign(payLoad , {email});
            const userData = await userRepositories.findOne({email});
            if (!userData) {
                next ({
                    message: 'invalid email',
                    error: 'Authentication Failed',
                    status: 403
                });
            }
            if (!bcrypt.compare(password, userData.password)) {
                next({
                    message: 'invalid password',
                    error: 'Authentication Failed',
                    status: 403
                });
            }
            const secret = 'secretKey';
            const tokenGenerated = jwt.sign(payLoad, secret, {expiresIn: '900s'});
            res.status(200).send({
                message: 'Logged in successfully',
                data: [
                    {
                        token: tokenGenerated
                    }
                ],
                status: 'success',
            });
        } catch (err) {
            console.log('error is ', err);
        }
    }
    get(req: Request, res: Response, next: NextFunction ) {
        try {
            res.status(200).send({
                message: 'User fetched successfully',
                data: [
                    {
                        name: 'User1',
                        address: 'Noida',
                    }
                ]
            });
        } catch (err) {
            console.log('error is ', err);
        }
    }
    create(req: Request, res: Response, next: NextFunction ) {
        try {
            res.status(200).send({
                message: 'User created successfully',
                data: [
                    {
                        name: 'User2',
                        address: 'Delhi',
                    }
                ]
            });
        } catch (err) {
            console.log('error is ', err);
        }
    }
    update(req: Request, res: Response, next: NextFunction ) {
        try {
            res.status(200).send({
                message: 'User updated successfully',
                data: [
                    {
                        name: 'User3',
                        address: 'Noida',
                    }
                ]
            });
        } catch (err) {
            console.log('error is ', err);
        }
    }
    delete(req: Request, res: Response, next: NextFunction ) {
        try {
            res.status(200).send({
                message: 'User deleted successfully',
                data: [
                    {
                        name: 'User4',
                        address: 'Faridabad',
                    }
                ],
                status: 'success',
            });
        } catch (err) {
            console.log('error is ', err);
        }
    }
}

export default UserController.getInstance();