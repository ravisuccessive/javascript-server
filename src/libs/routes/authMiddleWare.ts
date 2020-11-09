import * as jwt from 'jsonwebtoken';

import { hasPermission } from './Permission';

export default (module, permissionType) => (req, res, next) => {
    try {
        const token = req.headers['authorization'];
        const decorderUser = jwt.verify(token, 'qwertyuiopasdfghjklzxcvbnm123456');
        console.log(hasPermission(module, decorderUser.role, permissionType))
        if (hasPermission(module, decorderUser.role, permissionType)) {
        }
        else {
            throw Error;
        }
        next();
    }
    catch (err) {
        res.send({
            error: 'Unauthorized',
            code: 403,
        })
    }
}