import express from 'express'
import * as errores from '../controllers/errores.controller.js'

const router = express.Router()

router.all('*', errores.notFound)

export default router
