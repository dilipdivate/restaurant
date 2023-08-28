import express from 'express'
const router = express.Router();

import { addMember, createMember } from '../controllers/members.js';  

router.use(express.json())

router.post('/api/members', addMember)

// router.post('/api/members', async (req, res) => {
//     const member = req.body
//     try {
//         const newMember = await addMember(member)
//         res.json(newMember)
//     } catch (err) {
//             console.error(err)
//             res.status(500).json({err: `Something went wrong`})
//     }
// })
router.post('/api/createMember', createMember)

export default router;