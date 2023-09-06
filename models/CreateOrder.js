import dynamoose from 'dynamoose';
import dynamoClient from '../config/dynamodb.js'

const CreateOrderSchema = new dynamoose.Schema({
   
   order_id :  Number,
    customer_mobile : String,
    customer_name : String,
    // dishes : Array,
    active : Boolean
});

export default dynamoose.model("ManualOrders", CreateOrderSchema);