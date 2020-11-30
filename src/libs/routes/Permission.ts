import { permissions } from './Constants';

export function hasPermission(moduleName, role, permissionType) {
    if (permissions[moduleName].all.includes(role)) {
        console.log('The ' + role + ' has permission to ' + permissionType);
        return true;
    }
    else {
        const permission = permissions[moduleName][permissionType].includes(role);
        if (permission) {
            return true;
        }
        else {
            return false;
        }
    }
}