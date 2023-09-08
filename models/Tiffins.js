import dynamoose from 'dynamoose';
import dynamoClient from '../config/dynamodb.js'

const TiffinSchema = new dynamoose.Schema({
   
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
}, {
    timestamps: true,
  });

export default dynamoose.model("Tiffins", TiffinSchema);