import express from 'express'
import mongoose from 'mongoose'
import path from 'path'
import { Schema } from 'mongoose'

// Start App
const port = process.env.PORT || 4000
const CURRENT_SERVER_DIRECTORY = path.resolve(path.dirname("."))
const STATIC_DIRECTORY = path.resolve(CURRENT_SERVER_DIRECTORY, "backend_API", "public")


const app = express()
// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(STATIC_DIRECTORY))

app.get('/', (req, res) => {
    res.send('Capstone Backend')
})

// App Listening
app.listen(port, () => {
    console.log(`Listening on localhost:${port}`)
})