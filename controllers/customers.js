import Customers from '../models/Customer.js';
import catchAsyncErrors from '../middleware/catchAsyncErrors.js';



//Create Product -- Admin
export const createCustomer = catchAsyncErrors(async (req, res) => {
    
    const customer = await Customers.create(req.body);
  
    res.status(201).json({
      success: true,
      customer,
    });
});

export const getCustomerById = catchAsyncErrors(async (req, res) => {
  
  try {

  const customerId = req.body.id
  const customer = await Customers.get(customerId);
  console.log(customer)
  res.status(200).json({
    success: true,
   customer,
  });
} catch (e) {
  console.log(e)
  return e
}
});

export const getAllCustomers = catchAsyncErrors(async (req, res) => {
  
  try {

  // const memberId = req.body.id
  // const m = await Member.get(memberId);
      const customer = await Customers.scan().exec();
      console.log(customer)
  res.status(200).json({
    success: true,
   customer,
  });
} catch (e) {
  console.log(e)
  return e
}
});