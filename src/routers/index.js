import { Router } from 'express';
import СontactsRouter from './contacts.js';
import authRouter from './auth.js';

const router = Router();

router.use('/contacts', СontactsRouter);
router.use('/auth', authRouter);

export default router;
