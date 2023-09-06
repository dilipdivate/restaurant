
import dynamoose from 'dynamoose';
import dynamoClient from '../config/dynamodb.js'

const UserSchema = new dynamoose.Schema({
    id : Number,
    name: String,
    mobileNumber: String,
    email : String,
    address : String,
    city : String,
    state : String,
    pincode : String,
    password : String,
});

export default dynamoose.model("Members", UserSchema);