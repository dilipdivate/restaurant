import dynamoose from 'dynamoose';
import dynamoClient from '../config/dynamodb.js'

const SubCategorySchema = new dynamoose.Schema({
    provider_id : Number,
    branch_id : Number,
    category_id : Number,
    sub_category_id : Number,
    sub_category_name: String,
    active : Boolean
});

export default dynamoose.model("SubCategories", SubCategorySchema);