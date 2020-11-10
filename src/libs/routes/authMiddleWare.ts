import {configurations} from '../../config';
import {hasPermission} from './Permission';
import * as jwt from 'jsonwebtoken';
export default (module, permissionType) => (req, res, next) => {
    try {
        const token = req.headers['authorization'];
        if(!token) {
            next({
                err: "unauthorized",
                msz: "token not found",
                status: 403
            })
        }
        const key= configurations.secretKey
        const decodedUser = jwt.verify(token, key);
        if(!decodedUser || !decodedUser.role) {
            next({
                err: "unauthorized",
                msz: "role is undefined",
                status: 403
            })
        }
        if (!hasPermission(module, decodedUser.role, permissionType)) {
            next({
                err: "unauthorized",
                msz: "user doesn't have permissions",
                status: 403
            })
        }
        next();
    }
    catch (err) {
            next({
                err: "unauthorized",
                status: 403
            })
    }
 } 