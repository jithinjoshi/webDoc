import express from 'express';
import * as controller from '../controller/doctorController.js'
import { Auth } from '../Auth/middleware.js';

const router = express.Router();

router.route('/signin').post(controller.login);
router.route('/profile').get(Auth, controller.profile);
router.route('/profile/:id').put(controller.edit);

export default router