import { pool } from '../db.js'

export const getEvent = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM eventos_felices')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            code: -100,
            message: 'Ha ocurrido un error al obtener los datos.'
        })
    }
}

export const getEventById = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM eventos_felices WHERE id = ?', [req.params.id])
        console.log(rows)

        if (rows.length <= 0) {
            return res.status(404).json({
                code: -7,
                message: 'Evento no encontrado'
            })
        }

        res.json(rows[0])

    } catch (error) {
        return res.status(500).json({
            code: -100,
            message: 'Ha ocurrido un error al buscar el evento.',
        })
    }
}


export const createEvent = async (req, res) => {
    try {
        const { nombre, lugar, fecha, preinscripcion, precio } = req.body
        
        const [rows] = await pool.query('INSERT INTO eventos_felices(nombre, lugar, fecha, preinscripcion, precio) VALUES (?, ?, ?, ?, ?)', [nombre, lugar, fecha, preinscripcion, precio])
        console.log(req.body)
        res.send({
            id: rows.insertId,
            nombre,
            lugar,
            fecha,
            preinscripcion,
            precio,
        })

    } catch (error) {
        return res.status(500).json({
            code: -101,
            message: 'Algo falló al crear el evento.'
        })
    }
}

export const deleteEvent = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM eventos_felices WHERE id = ?', [req.params.id])

        if (result.affectedRows <= 0) return res.status(404).json({
            code:-7,
            message: 'Evento no encontrado'
        })

        res.sendStatus(204).json({
            code: 1,
            message: 'Evento eliminado correctamente.'
        })

    } catch (error) {
        return res.status(500).json({
            code: -155,
            message: 'Algo falló al eliminar el evento.'
        })
    }
}

export const updateEvent = async (req, res) => {
    const { id } = req.params
    const { nombre, lugar, fecha, preinscripcion, precio } = req.body
 
    try {
        const [result] = await pool.query('UPDATE eventos_felices SET nombre = IFNULL(?, nombre), lugar = IFNULL(?, lugar), fecha = IFNULL(?, fecha), preinscripcion = IFNULL(?, preinscripcion), precio = IFNULL(?, precio) WHERE id = ?', [nombre, lugar, fecha, preinscripcion, precio, id])

        console.log(result)

        if (result.affectedRows === 0) return res.status(404).json({
            code: -7,
            message: 'Evento no encontrado'
        })

    } catch (error) {
        return res.status(500).json({
            code: -144,
            message: 'Algo falló al actualizar el evento.'
        })
    }
}

