import {Request} from 'express';
export default interface IRequest extends Request {
    email: any
    password: any
    userDataToken: string
}