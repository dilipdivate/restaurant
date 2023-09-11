import dynamoose from 'dynamoose';
import dynamoClient from '../config/dynamodb.js'

const OrderSchema = new dynamoose.Schema({


id: {
    type: String,
    hashKey: true,
  },

  customer_mobile: String,
    customer_name: String,
    total: String,
    overall_discount: Number,
    final_price: Number,
    order_status : String,
    payment_status : String,
    order_mode : String,
}, {
timestamps: true,
});

export default dynamoose.model("ManualOrders", OrderSchema);