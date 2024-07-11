import express from 'express'
import payload from 'payload'

const dotenv = require('dotenv');
dotenv.config({path: ".env"});
dotenv.config({path: ".env.production"});
const app = express()

// Redirect root to Admin panel
app.get('/', (_, res) => {
    res.redirect('/admin')
})

const start = async () => {
    // Initialize Payload
    await payload.init({
        secret: process.env.PAYLOAD_SECRET as string,
        express: app,
        onInit: async () => {
            payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
        },
    })

    // Add your own express routes here

    app.listen(process.env.PORT as string)
}

start()
