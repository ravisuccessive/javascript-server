import Validation from '../../controllers/user/validation'
import { hasPermission } from './Permission';
import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import UserRepositories from '../../repositories/user/UserRepository';

export default (module, permission) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        let decodeUser: any;
        const authorization = 'authorization';
        const secretKey = "secretKey";
        const token = req.headers[authorization];
        if (!token) {
            next({
                message: 'Token not found',
                error: 'Authentication Failed',
                status: 403
            });
        }
        decodeUser = jwt.verify(token, secretKey);
        const { email, password } = decodeUser;
        if (!email || !password) {
            next({
                message: 'Email or Password not in token',
                error: 'Authentication failed',
                status: 403
            });
        }
        const userRepository = new UserRepositories();
        const data = await userRepository.findOne({ email, password });
        if (!data) {
            next({
                message: 'User is empty',
                error: 'Authetication failed',
                status: 403
            });
        }
        if (!data.role) {
            next({
                message: 'role not found',
                error: 'Authentication Failed',
                status: 403
            });
            return;
        }
        if (!hasPermission(module, data.role, permission)) {
            return next({
                message: `${data.role} does not have ${permission} permission in ${module}`,
                error: 'unauthorized',
                status: 403
            });
        }
        res.locals.userData = data;
        next();
    }
    catch (err) {
        next({
            message: 'User is Invalid',
            error: 'Uthentication Failed',
            status: 403
        });
    }
};