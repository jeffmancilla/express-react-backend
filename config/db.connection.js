import mongoose from "mongoose";
const { DATABASE_URL } = process.env

mongoose.connect(DATABASE_URL)
mongoose.connection.on('open', () => console.log('connected to mongodb'))
mongoose.connection.on('close', () => console.log('disconnected from mongodb'))
mongoose.connection.on('error', (err) => console.error(err))
