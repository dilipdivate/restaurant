import express from 'express'
const router = express.Router();

import {  createMember, getAllMembers, getMemberById } from '../controllers/members.js';  
import { createBranch } from '../controllers/branches.js';
import { createCategory } from '../controllers/categories.js';
import { createBranchUser } from '../controllers/branchUsers.js';
import { createSubCategory } from '../controllers/subCategories.js';
import { createDish, deleteDish, getAllDishes, getDishById, updateDish} from '../controllers/dishes.js';
import { createVariant } from '../controllers/variants.js';
import { createTiffin, deleteTiffin, getAllTiffins, getTiffin, getTiffinById } from '../controllers/tiffins.js';
import { createOrder, deleteOrder, getAllOrders, getOrderbyId } from '../controllers/orders.js';
import Order_Dishes from '../models/Order_Dishes.js';
import { createOrderDish } from '../controllers/orderDishes.js';
import { createCustomer, getAllCustomers, getCustomerById } from '../controllers/customers.js';
router.use(express.json())

// router.post('/api/members', addMember)
router.post('/api/createMember', createMember)
router.post('/api/createCustomer', createCustomer)
router.post('/api/createBranch',createBranch)
router.post('/api/createCategory',createCategory)
router.post('/api/createSubCategory',createSubCategory)
router.post('/api/createBranchUser',createBranchUser)
router.post('/api/createDish',createDish)
router.post('/api/createVariant',createVariant)
router.post('/api/createTiffin', createTiffin)
router.post('/api/createOrder', createOrder)
router.get('/api/getTiffins', getTiffin)
router.get('/api/getMember', getMemberById)
router.get('/api/getCustomer', getCustomerById)
router.get('/api/getAllMembers', getAllMembers)
router.get('/api/getAllCustomers', getAllCustomers)
router.get('/api/getDish', getDishById)
router.get('/api/getOrder', getOrderbyId)
router.delete('/api/deleteDish', deleteDish)
router.put('/api/updateDish', updateDish)
router.get('/api/getAllDishes', getAllDishes)
router.get('/api/getAllOrders', getAllOrders)
router.get('/api/getTiffin', getTiffinById)
router.get('/api/getAllTiffins',getAllTiffins)
router.delete('/api/deleteTiffin', deleteTiffin)
router.delete('/api/deleteOrder', deleteOrder)
router.post('/api/OrderDish',createOrderDish)

export default router;