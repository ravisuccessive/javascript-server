"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class traineeController {
    static getInstance() {
        if (traineeController.instance) {
            return traineeController.instance;
        }
        traineeController.instance = new traineeController();
        return traineeController.instance;
    }
    get(req, res, next) {
        try {
            var console;
            console.log("Inside get method of Trainee Controller");
            res.send({
                message: "Trainee fetched successfully",
                data: [
                    {
                        name: "Trainee",
                        address: "Noida"
                    }
                ]
            });
        }
        catch (err) {
            console.log("Inside err", err);
        }
    }
    create(req, res, next) {
        try {
            var console;
            console.log("Inside post method of Trainee Controller");
            res.send({
                message: "Trainee fetched successfully",
                data: [
                    {
                        name: "Trainee",
                        address: "Noida"
                    }
                ]
            });
        }
        catch (err) {
            console.log("Inside err", err);
        }
    }
    update(req, res, next) {
        try {
            var console;
            console.log("Inside update method of Trainee Controller");
            res.send({
                message: "Trainee fetched successfully",
                data: [
                    {
                        name: "Trainee",
                        address: "Noida"
                    }
                ]
            });
        }
        catch (err) {
            console.log("Inside err", err);
        }
    }
    delete(req, res, next) {
        try {
            var console;
            console.log("Inside delete method of Trainee Controller");
            res.send({
                message: "Trainee fetched successfully",
                data: [
                    {
                        name: "Trainee",
                        address: "Noida"
                    }
                ]
            });
        }
        catch (err) {
            console.log("Inside err", err);
        }
    }
}
exports.default = traineeController.getInstance();
//# sourceMappingURL=Controller.js.map