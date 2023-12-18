import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import * as routes from './routes/index.js'
import { tracker } from './middlewares/router.middleware.js'

const PORT = process.env.PORT ?? 3_000
const app = express()

app.use(cors())
app.use(express.json())

app.use(tracker)

app.use(routes.usuarios)
app.use(routes.errors)
// app.use(routes.productos)

app.all('*', (_, res) => res.status(404).json({ code: 404, message: 'Resource not found' }))

app.listen(PORT, () => console.log(`Server arriba en la URL: http://localhost:${PORT}`))

export default app
