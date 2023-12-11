import express from 'express'
const { PORT } = process.env

import './config/db.connection.js'
import peopleRouter from './routes/people.js'
const app = express()

app.use('/people', peopleRouter)

app.get('/', (req, res) => {
	res.send('sup dawk')
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
