import dynamoose from 'dynamoose';
import dynamoClient from '../config/dynamodb.js'

const OrderDishesSchema = new dynamoose.Schema({
   
  //  order_id : Number,
   dish_id : {
    type: String,
    hashKey: true,
  },
  order_id:String,
    name : String,
  quantity : String,
  unit : String,
   units:Number,
   price:String,
   discount:String,
   final_price:Number

}, {
    timestamps: true,
  });

export default dynamoose.model("OrderDishes", OrderDishesSchema);