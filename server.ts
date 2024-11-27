import express, { Application } from 'express'
import app from './config/app'
import dotenv from 'dotenv'
import connectDB from './config/db.config'

dotenv.config() 

const PORT : number = Number(process.env.PORT) || 8000

app.listen(PORT , async () => {
    console.log('Server listening on port: ' + PORT)

    await connectDB()
})