import { UserController } from '../controllers/user.controller'
import express = require('express');

export class UserRoutes {

    userController: UserController = new UserController();

    public routes(app: express.Application): void {
        app.route('/api/getUser/:id').get(this.userController.getUser);
        app.route('/api/getAllUsers').get(this.userController.getAllUser);
        app.route('/api/updateUser').put(this.userController.updateUser);
        app.route('/api/insertUser').post(this.userController.insertUser);
        app.route('/api/deleteUser').post(this.userController.deleteUser);
    }
}