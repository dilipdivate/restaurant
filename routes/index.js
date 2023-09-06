import express from 'express'
const router = express.Router();

import {  createMember, getMember } from '../controllers/members.js';  
import { createBranch } from '../controllers/branches.js';
import { createCategory } from '../controllers/categories.js';
import { createBranchUser } from '../controllers/branchUsers.js';
import { createSubCategory } from '../controllers/subCategories.js';
import { createDish } from '../controllers/dishes.js';
import { createVariant } from '../controllers/variants.js';
import { createTiffin, getTiffin } from '../controllers/tiffins.js';
import { createManualOrder } from '../controllers/manualorders.js';
router.use(express.json())

// router.post('/api/members', addMember)
router.post('/api/createMember', createMember)
router.post('/api/createBranch',createBranch)
router.post('/api/createCategory',createCategory)
router.post('/api/createSubCategory',createSubCategory)
router.post('/api/createBranchUser',createBranchUser)
router.post('/api/createDish',createDish)
router.post('/api/createVariant',createVariant)
router.post('/api/createTiffin', createTiffin)
router.post('/api/createOrder', createManualOrder)
router.get('/api/getTiffins', getTiffin)
router.get('/api/getMember', getMember)
export default router;