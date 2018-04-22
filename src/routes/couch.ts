import { Router } from 'express';
import * as couchCtrl from '../controllers/couch';

const router: Router = Router();

router.get('/', couchCtrl.root);
router.get('/getAllDb', couchCtrl.getAllDb);
router.get('/data', couchCtrl.data);
router.get('/data2', couchCtrl.data2);
router.get('/combineData', couchCtrl.combineData);

export default router;