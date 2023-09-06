import Dishes from '../models/Dishes.js';

import catchAsyncErrors from '../middleware/catchAsyncErrors.js';

//Create Product -- Admin
export const createDish = catchAsyncErrors(async (req, res) => {
    
    const dish = await Dishes.create(req.body);
  
    res.status(201).json({
      success: true,
      dish,
    });
});

