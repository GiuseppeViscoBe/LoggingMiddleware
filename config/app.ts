import express , { Application } from "express";
import bookRouter from "../routers/books.router";
import { loggingMiddleware } from "../middlewares/logging.middleware";


const app : Application = express()

app.use(express.json())

app.use(loggingMiddleware)
app.use('/api', bookRouter)

export default app 