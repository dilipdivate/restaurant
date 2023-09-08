import dynamoose from 'dynamoose';
import dynamoClient from '../config/dynamodb.js'

const DishesSchema = new dynamoose.Schema({
   
    id: {
        type: String,
        hashKey: true,
      },

    name : String,
    category : String,
    quantity : String,
    unit : String,
    Price : String,
    discount : String,
    dish_description : String,
    active : Boolean,
    final_price: Number
}, {
    timestamps: true,
  });

export default dynamoose.model("Dishes", DishesSchema);