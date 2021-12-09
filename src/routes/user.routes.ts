import { Router } from 'express';
import UserController from '../resources/user/user.controllers';
import userAuthenticated from '../middlewares/userAuthenticated'; 



const userRouter = Router();
const userController = new UserController();

userRouter.post('/signin', userController.signin) // procurar um usuario existente
userRouter.post('/signup', userController.signup) // cria um novo usuario e gera um token
userRouter.get('/me', userAuthenticated, userController.me)

export default userRouter;