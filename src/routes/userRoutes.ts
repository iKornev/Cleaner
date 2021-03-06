import { Router } from 'express';
import UserController from '../controller/userController';
import validator from '../middleware/validator';
import { userSignInSchema, userSignUpSchema, passportResetSchema } from '../validation/user';

export default class UserRouter {
  private router: Router;
  private userController: UserController;

  constructor() {
    this.router = Router();
    this.userController = new UserController();
  }

  getUserRoutes() {
    console.log('getUserRoutes');
    this.router.post('/api/v1/user', validator(userSignUpSchema), this.userController.createUser);
    this.router.post('/api/v1/session', validator(userSignInSchema), this.userController.loginUser);
    this.router.post('/api/v1/user/password', validator(passportResetSchema), this.userController.resetPassword);

    return this.router
  }
}