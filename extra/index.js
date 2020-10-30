import {diamond,equilateral} from './patterns'
import {hasPermissions,validateUsers} from './utils'
import {users} from './constants'

diamond(5)
equilateral(5)
hasPermissions('getUsers',"trainer","read"); 
validateUsers(users)