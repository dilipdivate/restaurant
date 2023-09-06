import Tiffins from '../models/Tiffins.js';

import catchAsyncErrors from '../middleware/catchAsyncErrors.js';

//Create Product -- Admin
export const createTiffin = catchAsyncErrors(async (req, res) => {
    
    const tiffin = await Tiffins.create(req.body);
  
    res.status(201).json({
      success: true,
      tiffin,
    });
});

export const getTiffin = catchAsyncErrors(async (req, res) => {
    
  const t = Tiffins.get();

  res.status(201).json({
    success: true,
    t,
  });
});

