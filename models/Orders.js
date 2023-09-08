import dynamoose from 'dynamoose';
import dynamoClient from '../config/dynamodb.js'

const OrderSchema = new dynamoose.Schema({
   
   order_id :  Number,
    customer_mobile : String,
    customer_name : String,
    total : String,
    overall_discount: Number,
    final_price: Number
});

export default dynamoose.model("ManualOrders", OrderSchema);