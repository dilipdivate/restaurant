import dynamoose from 'dynamoose';
import dynamoClient from '../config/dynamodb.js'

const CategorySchema = new dynamoose.Schema({
    provider_id : Number,
    branch_id : Number,
    category_id : Number,
    category_name: String,
    active : Boolean
});

export default dynamoose.model("Categories", CategorySchema);