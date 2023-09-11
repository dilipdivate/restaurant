import ManualOrders from '../models/Orders.js';

import catchAsyncErrors from '../middleware/catchAsyncErrors.js';
import Orders from '../models/Orders.js';

//Create Product -- Admin
export const createOrder = catchAsyncErrors(async (req, res) => {
    
    const manualOrder = await ManualOrders.create(req.body);
  
    res.status(201).json({
      success: true,
      manualOrder,
    });
});

export const deleteOrder = catchAsyncErrors(async (req, res) => {

  try {
    const orderid = req.body.id
    Orders.delete(orderid)
    res.status(200).json({
      success: true,

    });
  } catch (e) {
    console.log(e)
    return e
  }
});

export const getOrderbyId = catchAsyncErrors(async (req, res) => {
  
  try {

  const orderID = req.body.id
  const order = await ManualOrders.get(orderID);
  console.log(order)
  res.status(200).json({
    success: true,
   order,
  });
} catch (e) {
  console.log(e)
  return e
}
});

export const getAllOrders = catchAsyncErrors(async (req, res) => {
  
  try {

  // const memberId = req.body.id
  // const m = await Member.get(memberId);
      const order = await ManualOrders.scan().exec();
      console.log(order)
  res.status(200).json({
    success: true,
   order,
  });
} catch (e) {
  console.log(e)
  return e
}
});