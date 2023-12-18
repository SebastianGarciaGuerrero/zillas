import db from '../databases/db.js'
import { encrypt, compare } from '../../utils/bcrypt.js'

export const register = async (email, password) => {
  console.log('Original password:', password)
  const encryptedPassword = encrypt(password)
  console.log('Encrypted password:', encryptedPassword)

  const [user] = await db('INSERT INTO usuarios (id, email, password) VALUES (DEFAULT, $1, $2) RETURNING *;', [email, encryptedPassword])

  return user
}

export const login = async (email, password) => {
  const [user] = await db('SELECT * FROM usuarios WHERE email = $1', [email])
  return compare(password, user?.password ?? '') ? user : null
}
