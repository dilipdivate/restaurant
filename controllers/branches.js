import Branch from '../models/Branch.js';

import catchAsyncErrors from '../middleware/catchAsyncErrors.js';

//Create Product -- Admin
export const createBranch = catchAsyncErrors(async (req, res) => {
    
    const branch = await Branch.create(req.body);
  
    res.status(201).json({
      success: true,
      branch,
    });
});