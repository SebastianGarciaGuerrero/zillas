import express from 'express'
import * as usuarios from '../controllers/usuarios.controller.js'

const router = express.Router()

router.post('/register', usuarios.register)
router.post('/login', usuarios.login)

export default router
