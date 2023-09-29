import { Router } from 'express'
import * as posesCtrl from '../controllers/poses.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========== Public Routes ===========


// ========= Protected Routes ========= 
router.use(decodeUserFromToken)

router.get('/', checkAuth, posesCtrl.index)  
router.get('/:poseId', checkAuth, posesCtrl.show)

router.post('/', checkAuth, posesCtrl.create)

router.put('/:poseId', checkAuth, posesCtrl.update)

router.delete('/:poseId', checkAuth, posesCtrl.delete)

export { router }