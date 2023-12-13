import express from 'express'
import './config/db.connection.js'
import peopleRouter from './routes/people.js'
import cors from 'cors'
import morgan from 'morgan'

const { PORT } = process.env

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors())
app.use(morgan('dev'))

app.use('/people', peopleRouter)
app.get('/', (req, res) => {
		res.send('sup dawk')
	})

	app.listen(PORT, () => console.log(`listening on port ${PORT}`))
