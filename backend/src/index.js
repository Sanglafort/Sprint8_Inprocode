import express from 'express'
import eventosRoutes from './routes/eventos.routes.js'
import indexRoutes from './routes/index.routes.js'

import {PORT} from '../config.js'

const app = express()

app.use(express.json())

app.use(indexRoutes)
app.use(eventosRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        mensaje: 'Endpoint NOT FOUND.'
    })
})

app.listen(PORT)
console.log('Ejecutandose en puerto: ', PORT)