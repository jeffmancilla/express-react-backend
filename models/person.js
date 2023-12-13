import mongoose from 'mongoose'

const personSchema = new mongoose.Schema({
	name: String,
	image: String,
	title: String,
})

export default mongoose.model('Person', personSchema)
