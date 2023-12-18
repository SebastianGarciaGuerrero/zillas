import * as sql from '../models/Usuarios.dao.js'
import HTTP_STATUS from '../../config/constants.js'
import { jwtSign } from '../../utils/jwt.js'

export const register = (req, res) => {
  sql.register(req.body.email, req.body.password)
    .then(([user]) => res.status(HTTP_STATUS.created.code).json({ id: user.id, email: user.email }))
    .catch((error) => res.status(HTTP_STATUS.internal_server_error.code).json(error))
}

export const login = (req, res) => {
  sql.login(req.body.email, req.body.password)
    .then((user) => {
      user.length > 0
        ? res.status(HTTP_STATUS.ok.code).json({ token: jwtSign({ email: req.body.email }) })
        : res.status(HTTP_STATUS.not_found.code).json({ code: HTTP_STATUS.not_found.code, message: HTTP_STATUS.unauthorized.text.op0 })
    })
    .catch((error) => res.status(HTTP_STATUS.internal_server_error.code).json(error))
}
