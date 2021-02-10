import { IPermissions } from "./Interfaces";

export const permissions: IPermissions = {
    getUsers: {
        all: ['head-trainer'],
        read : ['trainee', 'trainer'],
        write : ['trainer'],
        Delete: []
    },
};


export const payLoad = {
    'iss': 'Successive Technologies',
    'iat': 1604858574,
    'exp': 1636394601,
    'aud': 'www.successive.in',
    'sub': 'Learn and Implement',
    'email': '',
    'password': ''
};
