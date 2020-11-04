import {IPermission} from './Interfaces';
export const permissions: IPermission = {
    'getUsers': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        Delete: [],
    }
}