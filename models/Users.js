
import dynamoose from 'dynamoose';
import dynamoClient from '../config/dynamodb.js'

const UserSchema = new dynamoose.Schema({

    id: {
        type: String,
        hashKey: true,
      },

    name: String,
    mobileNumber: String,
    email : String,
    address : String,
    city : String,
    state : String,
    pincode : String,
    password : String,
}, {
    timestamps: true,
  });

export default dynamoose.model("Members", UserSchema);
