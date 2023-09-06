import dynamoose from 'dynamoose';
import dynamoClient from '../config/dynamodb.js'

const TiffinSchema = new dynamoose.Schema({
   
   tiffin_id :  Number,
    tiffin_name : String,
    category : String,
    Price : String,
    discount : String,
    dish_description : String,
    active : Boolean
});

export default dynamoose.model("Tiffins", TiffinSchema);