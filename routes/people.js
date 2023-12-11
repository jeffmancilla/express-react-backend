import express from 'express'
const router = express.Router()

router.get('/', (req,res) => res.send('ppl'))

export default router