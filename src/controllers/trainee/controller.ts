import { Request, Response, NextFunction, response } from 'express';
import UserRepositories from '../../repositories/user/UserRepository';
import * as bcrypt from 'bcrypt';

class TraineeController {
    private userRepository;
    constructor() {
        this.userRepository = new UserRepositories();
    }
    static instance: TraineeController;
    static getInstance() {
        if (TraineeController.instance) {
            return TraineeController.instance;
        }
        TraineeController.instance = new TraineeController();
        return TraineeController.instance;
    }
    public get = async (req: Request, res: Response, next: NextFunction ) => {
        try {
            const userRepository = new UserRepositories();
            const sort = {};
            sort[`${req.query.sortedBy}`] = req.query.sortedOrder;
            console.log(sort);
            const extractedData = await userRepository.findAll(req.body).sort(sort).skip(Number(req.query.skip)).limit(Number(req.query.limit));
            res.status(200).send({
                message: 'trainee fetched successfully',
                totalCount: await userRepository.count(req.body),
                count: extractedData.length,
                data: [extractedData],
                status: 'success',
            });
        } catch (err) {
            console.log('error: ', err);
        }
    }
    public create = async (req: Request, res: Response, next: NextFunction ) => {
        try {
            const pass = await bcrypt.hash(req.body.password, 10);
            req.body.password = pass;
            this.userRepository.userCreate(req.body);
            res.status(200).send({
                message: 'trainee created successfully',
                data: [req.body],
                status: 'success',
            });
        } catch (err) {
            console.log('error is ', err);
        }
    }
    public update = async (req: Request, res: Response, next: NextFunction ) => {
        try {
            this.userRepository.userUpdate(req.body);
            res.status(200).send({
                message: 'trainee updated successfully',
                data: [req.body]
            });
        } catch (err) {
            console.log('error is ', err);
        }
    }
    public delete = async (req: Request, res: Response, next: NextFunction ) => {
        try {
            const id = req.params.id;
           const result = await this.userRepository.delete(id);
            res.status(200).send({
                message: 'trainee deleted successfully',
                data: result,
                status: 'success',
            });
        } catch (err) {
            console.log('error is ', err);
        }
    }
}

export default TraineeController.getInstance();