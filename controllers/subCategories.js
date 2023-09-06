import SubCategories from '../models/SubCategories.js';

import catchAsyncErrors from '../middleware/catchAsyncErrors.js';


//Create Product -- Admin
export const createSubCategory = catchAsyncErrors(async (req, res) => {
    
    const sub_category = await SubCategories.create(req.body);
  
    res.status(201).json({
      success: true,
      sub_category,
    });
});