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

export const getDishById = catchAsyncErrors(async (req, res) => {
  
  try {

  const dishId = req.body.id
  const dish = await Dishes.get(dishId);
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

export const getAllDishes = catchAsyncErrors(async (req, res) => {
  
  try {

  // const memberId = req.body.id
  // const m = await Member.get(memberId);
      const dish = await Dishes.scan().exec();
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

export const deleteDish = catchAsyncErrors(async (req, res) => {
  
  try {

  const dishId = req.body.id
  Dishes.delete(dishId)

  res.status(200).json({
    success: true,
 
  });
} catch (e) {
  console.log(e)
  return e
}
});

export const updateDish = catchAsyncErrors(async (req, res) => {
  
  try {

  const dishId = req.body.id
  Dishes.update({dishId, name: req.body.dish_name, category: req.body.category,quantity: req.body.quantity, price: req.body.Price, discount: req.body.discount})

  res.status(200).json({
    success: true,
 
  });
} catch (e) {
  console.log(e)
  return e
}
});