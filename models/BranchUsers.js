import dynamoose from 'dynamoose';
import dynamoClient from '../config/dynamodb.js'

const Branch_UserSchema = new dynamoose.Schema({
    provider_id : Number,
    branch_id : Number,
    user_id : Number,
    user_name : String,
    user_email : String,
    user_mobile : String,
    role : String,
    active : Boolean
});

export default dynamoose.model("Branch_users", Branch_UserSchema);