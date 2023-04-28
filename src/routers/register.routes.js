import { Router } from "express";
import { addDuo, deleteDuo, getDuos, updateDuo } from "../controllers/register.controllers.js";

const router = Router()

router.get('/', getDuos)

router.post('/', addDuo)

router.delete('/:id', deleteDuo)

router.put('/:id', updateDuo)

export default router