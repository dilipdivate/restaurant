import BranchUsers from '../models/BranchUsers.js';

import catchAsyncErrors from '../middleware/catchAsyncErrors.js';

//Create Product -- Admin
export const createBranchUser = catchAsyncErrors(async (req, res) => {
    
    const branchUser = await BranchUsers.create(req.body);
  
    res.status(201).json({
      success: true,
      branchUser,
    });
});

