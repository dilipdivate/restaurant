import dynamoose from 'dynamoose';
import dynamoClient from '../config/dynamodb.js'

const BranchSchema = new dynamoose.Schema({
    branch_name: String,
    branch_address: String,
    branch_city : String,
    branch_state : String,
    branch_country : String,
    branch_pincode : String,
});

export default dynamoose.model("Branches", BranchSchema);