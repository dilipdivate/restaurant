import Dishes from '../models/Dishes.js';

import catchAsyncErrors from '../middleware/catchAsyncErrors.js';

//Create Product -- Admin
export const createDish = catchAsyncErrors(async (req, res) => {
    
    const dish = await Dishes.create(req.body);
  
    res.status(201).json({
      success: true,
      dish,
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
  let  {id,name, category,type , quantity,price, discount,unit,description,breakfast,lunch,dinner,final_price} = req.body
  console.log("before: ",name, category)

  Dishes.update({id}, {name, category,type, quantity,price,discount,unit,description,breakfast,lunch,dinner,final_price}
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

