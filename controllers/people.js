// import db from '../models'
import person from '../models/person.js'

export default {
	index: async (req, res) => {
		try {
			await res.status(200).json(await person.find())
		} catch (err) {
			res.status(400).json({ err: err.message })
		}
	},
	create: async (req, res) => {
		try {
			await res.status(201).json(await person.create(req.body))
		} catch (err) {
			res.status(400).json({ err: err.message })
		}
	},
	show: async (req, res, next) => {
		try {
			await res.status(200).json(await person.findById(req.params.id))
		} catch (err) {
			res.status(400).json({ err: err.message })
		}
	},
	update: async (req, res, next) => {
		try {
			await res
				.status(201)
				.json(
					await person.findByIdAndUpdate(req.params.id, req.body, { new: true })
				)
		} catch (err) {
			res.status(400).json({ err: err.message })
		}
	},
	delete: async (req, res, next) => {
		try {
			await res.status(201).json(await person.findByIdAndDelete(req.params.id))
		} catch (err) {
			res.status(400).json({ err: err.message })
		}
	},
}
