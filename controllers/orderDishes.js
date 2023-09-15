import OrderDishes from '../models/Order_Dishes.js';

import catchAsyncErrors from '../middleware/catchAsyncErrors.js';

//Create Product -- Admin
export const createOrderDish = catchAsyncErrors(async (req, res) => {
    
    const Orderdish = await OrderDishes.create(req.body);
  
    res.status(201).json({
      success: true,
      Orderdish,
    });
});

export const getOrderDishByID = catchAsyncErrors(async (req, res) => {
  
  try {

  const dishId = req.body.dish_id
  const orderID = req.body.order_id
  const dish = OrderDishes.get(dishId, orderID);
  console.log(dish)
  res.status(200).json({
    success: true,
   dish,
  });
} catch (e) {
  console.log(e)
  return e
}
});

export const getAllOrderDishes = catchAsyncErrors(async (req, res) => {
  
  try {

  // const memberId = req.body.id
  // const m = await Member.get(memberId);
      const dish = await OrderDishes.scan().exec();
      console.log(dish)
  res.status(200).json({
    success: true,
   dish,
  });
} catch (e) {
  console.log(e)
  return e
}
});

export const deleteOrderDish = catchAsyncErrors(async (req, res) => {
  
  try {

  const dishId = req.body.dish_id
  const orderId = req.body.order_id
  OrderDishes.delete(dishId,orderId)

  res.status(200).json({
    success: true,
 
  });
} catch (e) {
  console.log(e)
  return e
}
});

export const updateOrderDish = catchAsyncErrors(async (req, res) => {
  
  try {

    let  {dish_id,order_id,name,quantity,unit,units,price, discount,final_price} = req.body
    OrderDishes.update({dish_id}, {order_id,units,name,quantity,unit,price, discount,final_price}
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