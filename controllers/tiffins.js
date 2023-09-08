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

export const getTiffinById = catchAsyncErrors(async (req, res) => {

  try {

    const tiffinid = req.body.id
    const tiffin = await Tiffins.get(tiffinid);
    console.log(tiffin)
    res.status(200).json({
      success: true,
      tiffin,
    });
  } catch (e) {
    console.log(e)
    return e
  }
});

export const getAllTiffins = catchAsyncErrors(async (req, res) => {

  try {

    // const memberId = req.body.id
    // const m = await Member.get(memberId);
    const tiffin = await Tiffins.scan().exec();
    console.log(tiffin)
    res.status(200).json({
      success: true,
      tiffin,
    });
  } catch (e) {
    console.log(e)
    return e
  }
});

export const deleteTiffin = catchAsyncErrors(async (req, res) => {
  
  try {

  const tiffinid = req.body.id
  Tiffins.delete(tiffinid)
  res.status(200).json({
    success: true,
 
  });
} catch (e) {
  console.log(e)
  return e
}
});