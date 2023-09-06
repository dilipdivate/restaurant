import dynamoose from 'dynamoose';
import dynamoClient from '../config/dynamodb.js'

const DishesSchema = new dynamoose.Schema({
   
    dish_id :  Number,
    dish_name : String,
    category : String,
    quantity : String,
    unit : String,
    Price : String,
    discount : String,
    dish_description : String,
    active : Boolean
});

export default dynamoose.model("Dishes", DishesSchema);