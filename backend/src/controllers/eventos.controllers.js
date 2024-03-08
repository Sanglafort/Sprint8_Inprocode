import { pool } from '../db.js'

export const getEvent = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM eventos_felices')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Algo falló.'
        })
    }
}

export const getEventById = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM eventos_felices WHERE id = ?', [req.params.id])
        console.log(rows)

        if (rows.length <= 0) return res.status(404).json({ message: 'No encontrado' })

        res.json(rows[0])

    } catch (error) {
        return res.status(500).json({
            mensaje: 'Algo falló.'
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
            mensaje: 'Algo falló.'
        })
    }

}

export const deleteEvent = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM eventos_felices WHERE id = ?', [req.params.id])

        if (result.affectedRows <= 0) return res.status(404).json({
            mensaje: 'Evento no encontrado'
        })

        res.sendStatus(204) // Se elimino pero no se devuelve nada.

    } catch (error) {
        return res.status(500).json({
            mensaje: 'Algo falló.'
        })
    }
}

export const updateEvent = async (req, res) => {
    const { id } = req.params
    const { nombre, lugar, fecha, preinscripcion, precio } = req.body

    try {
        const [result] = await pool.query('UPDATE eventos_felices SET nombre = IFNULL(?, nombre), lugar = IFNULL(?, lugar), fecha = IFNULL(?, fecha), prescripcion = IFNULL(?, prescripcion), precio = IFNULL(?, precio) WHERE id = ?', [nombre, lugar, fecha, preinscripcion, precio, id])

        console.log(result)

        if (result.affectedRows === 0) return res.status(404).json({
            mensaje: 'Evento no encontrado'
        })

        // Se encuentra el evento y se devuelve 
        const [rows] = await pool.query('SELECT * FROM eventos_felices WHERE id = ?', [id])

        res.json(rows[0])

    } catch (error) {
        return res.status(500).json({
            mensaje: 'Algo falló.'
        })
    }
}

