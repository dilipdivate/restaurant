import Member from '../models/Users.js';
import catchAsyncErrors from '../middleware/catchAsyncErrors.js';



//Create Product -- Admin
export const createMember = catchAsyncErrors(async (req, res) => {
    
    const member = await Member.create(req.body);
  
    res.status(201).json({
      success: true,
      member,
    });
});

export const addMember = catchAsyncErrors(async (req, res) => {
  
    const member = await Member.create(req.body);
  
    res.status(201).json({
      success: true,
      member,
    });
});