import ManualOrders from '../models/CreateOrder.js';

import catchAsyncErrors from '../middleware/catchAsyncErrors.js';

//Create Product -- Admin
export const createManualOrder = catchAsyncErrors(async (req, res) => {
    
    const manualOrder = await ManualOrders.create(req.body);
  
    res.status(201).json({
      success: true,
      manualOrder,
    });
});

