import { Router } from 'express'
import * as courseResultsCtrl from '../controllers/courseResults.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========== Public Routes ===========


// ========= Protected Routes ========= 
router.use(decodeUserFromToken)

router.get('/', checkAuth, courseResultsCtrl.index)  
router.get('/:courseResultId', checkAuth, asanaCoursesCtrl.show)

router.post('/', checkAuth, courseResultsCtrl.create)

router.put('/:courseResultId', checkAuth, courseResultsCtrl.update)

router.delete('/:courseResultId', checkAuth, courseResultsCtrl.delete)

export { router }