import express from "express";
import { PORT } from "./config.js";
import routerDuos from './routers/register.routes.js'
import cors from 'cors'

const app = express()

app.use(cors({
  origin: true,
  credentials: true
}))

app.use(express.json())

app.use('/api', routerDuos)

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`)
})