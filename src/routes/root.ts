import { Router } from 'express';
import * as rootCtrl from '../controllers/root';

const router: Router = Router();

router.get('/', rootCtrl.root);
router.get('/about', rootCtrl.about);

export default router;