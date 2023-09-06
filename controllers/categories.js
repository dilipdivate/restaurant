import Categories from '../models/Categories.js'

import catchAsyncErrors from '../middleware/catchAsyncErrors.js';
import branch from '../models/Branch.js';

//Create Product -- Admin
export const createCategory = catchAsyncErrors(async (req, res) => {
    
    const category = await Categories.create(req.body);
  
    res.status(201).json({
      success: true,
      category,
    });
});