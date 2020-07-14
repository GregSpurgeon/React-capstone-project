import express from 'express'
import mongoose from 'mongoose'
import path from 'path'
import { Schema } from 'mongoose'

// Start App
const port = process.env.PORT || 4000
const current_server_directory = path.resolve(path.dirname("."))
const static_directory = path.resolve(current_server_directory, "backend_API", "public")


const app = express()
// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(static_directory))

app.get('/', (req, res) => {
    res.send('Capstone Backend')
})

// App Listening
app.listen(port, () => {
    console.log(`Listening on localhost:${port}`)
})