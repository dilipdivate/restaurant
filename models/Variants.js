import dynamoose from 'dynamoose';
import dynamoClient from '../config/dynamodb.js'

const VariantsSchema = new dynamoose.Schema({
    provider_id : Number,
    // branch_id : Number,
    // dish_id : Number,
    // variant_id : Number,
    Variant_quantity : Number,
    variant_unit : String,
    variant_price : Number,
    variant_availability : Array
});

export default dynamoose.model("Variants", VariantsSchema);