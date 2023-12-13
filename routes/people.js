import express from 'express'
import people from '../controllers/people.js'

const router = express.Router()

router
	.route('/')
	.get(people.index)
	.post(people.create)

router
	.route('/:id')
	.get(people.show)
	.put(people.update)
	.delete(people.delete)

export default router
