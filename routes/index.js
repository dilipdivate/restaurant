import express from 'express'
const router = express.Router();

import {getMembers, addMember, deleteMember, getMemberById, 
     createMember } from '../models/Users.js'

router.use(express.json())

router.post('/api/members', async (req, res) => {
    const member = req.body
    try {
        const newMember = await addMember(member)
        res.json(newMember)
    } catch (err) {
            console.error(err)
            res.status(500).json({err: `Something went wrong`})
    }
})

router.post('/api/createMember', async (req, res) => {
    // const member = req.body
    try {
        const createMember = await createMember()
        res.json(createMember)
    } catch (err) {
            console.error(err)
            res.status(500).json({err: `Something went wrong`})
    }
})

export default router;