import { Router } from 'express';
import UserController from './controllers/UserController';

const router = Router();

router.use((req, res, next) => {
    console.log(req.method, req.url, req.statusCode);
    next();
});

router.post('/create-user', UserController.create);

export default router;