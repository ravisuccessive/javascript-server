// let permissions =
// {
// 'getUsers': {
// all: ['head-trainer'],
// read : ['trainee', 'trainer'],
// write : ['trainer'],
// Delete: [],
// }
// }
import {permissions} from "../constants"

export default function hasPermission(moduleName,role,permissionType)
{
console.log(permissions[moduleName][permissionType].includes(role)); //using bracket operator

}

hasPermission('getUsers',"trainer","read");
hasPermission('getUsers',"trainee","write");

// hasPermissions("getProduct", "trainer", "delete");