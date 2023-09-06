import Variants from '../models/Variants.js';

import catchAsyncErrors from '../middleware/catchAsyncErrors.js';

//Create Product -- Admin
export const createVariant = catchAsyncErrors(async (req, res) => {
    
    const variant = await Variants.create(req.body);
  
    res.status(201).json({
      success: true,
      variant,
    });
});
