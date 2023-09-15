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
console.log(req.body)
  const orderID = req.body.id
  const o = await ManualOrders.get(orderID);
  console.log(o)
  res.status(200).json({
    success: true,
   o,
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

export const updateOrder = catchAsyncErrors(async (req, res) => {
  
  try {
   let  {id,customer_mobile, customer_name,total , overall_discount,final_price, order_status,payment_status,order_mode,pickup_date} = req.body
  //  console.log("before: ",name, category)
 
   Orders.update({id}, {customer_mobile, customer_name,total, overall_discount,final_price,order_status,payment_status,order_mode,pickup_date}
     , function(error, result) {
       if (error) {
           return console.log(error);
       }
       console.log(result);
       res.status(200).json({
         success: true,
         result
       });
   })
   
 } catch (e) {
   console.log(e)
   return e
 }
 });