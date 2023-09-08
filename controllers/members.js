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

export const getMemberById = catchAsyncErrors(async (req, res) => {
  
  try {

  const memberId = req.body.id
  const m = await Member.get(memberId);
  console.log(m)
  res.status(200).json({
    success: true,
   m,
  });
} catch (e) {
  console.log(e)
  return e
}
});

export const getAllMembers = catchAsyncErrors(async (req, res) => {
  
  try {

  // const memberId = req.body.id
  // const m = await Member.get(memberId);
      const m = await Member.scan().exec();
      console.log(m)
  res.status(200).json({
    success: true,
   m,
  });
} catch (e) {
  console.log(e)
  return e
}
});