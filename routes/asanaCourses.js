import { Router } from 'express'
import * as asanaCoursesCtrl from '../controllers/asanaCourses.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========== Public Routes ===========


// ========= Protected Routes ========= 
router.use(decodeUserFromToken)


router.get('/', checkAuth, asanaCoursesCtrl.index)  
router.get('/:asanaCourseId', checkAuth, asanaCoursesCtrl.show)


export { router }