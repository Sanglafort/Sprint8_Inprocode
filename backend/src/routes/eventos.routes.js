import { Router } from "express";
import { getEvent, createEvent, updateEvent, deleteEvent, getEventById } from "../controllers/eventos.controllers.js"

const router = Router()

router.get('/eventos', getEvent)

router.get('/eventos/:id', getEventById)

router.post('/eventos', createEvent)

router.patch('/eventos/:id', updateEvent)

router.delete('/eventos/:id', deleteEvent)

export default router