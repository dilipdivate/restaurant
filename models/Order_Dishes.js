import dynamoose from 'dynamoose';
import dynamoClient from '../config/dynamodb.js'

const OrderDishesSchema = new dynamoose.Schema({
   
    // id: {
    //     type: String,
    //     hashKey: true,
    //   },

    dish_name : {
      type : Object,
      schema : {
dish_name: String,
      }
    },
    // quantity : Number,
    // unit : String,
    // Price : String,
    // discount : String,
    // final_price: Number
}, {
    timestamps: true,
  });

export default dynamoose.model("OrderDishes", OrderDishesSchema);