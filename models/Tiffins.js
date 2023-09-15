import dynamoose from 'dynamoose';
import dynamoClient from '../config/dynamodb.js'

const TiffinSchema = new dynamoose.Schema({
   
    id: {
        type: String,
        hashKey: true,
      },

      name : String,
    category : String,
    type: String,
    quantity : String,
    price : String,
    discount : String,
    description : String,
  breakfast : Boolean,
    lunch : Boolean,
    dinner : Boolean,
    final_price: Number
}, {
    timestamps: true,
  });

export default dynamoose.model("Tiffins", TiffinSchema);