import express from 'express';

import root from './services/root';

const router = express.Router();

router.get('/', root);

export default router;
