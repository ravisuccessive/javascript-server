import {diamond,equilateral} from './patterns'
import {hasPermissions,validateUsers} from './utils'

diamond(5),
equilateral(5)
const users = [
    {
    traineeEmail: 'sumit.upadhyay@successive.tech',
    reviewerEmail: 'chirag.arora@successive.tech',
    },
    {
    traineeEmail: '@sumitsuccessive.tech',
    reviewerEmail: '@chiragsuccesive.tech',
    },
    ];

hasPermissions('getUsers',"trainer","read");
validateUsers(users)