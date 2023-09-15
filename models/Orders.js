import dynamoose from 'dynamoose';
import dynamoClient from '../config/dynamodb.js'

const OrderSchema = new dynamoose.Schema({


  id: {
    type: String,
    hashKey: true,
  },

  customer_mobile: String,
  customer_name: String,
  total: String,
  overall_discount: String,
  final_price: Number,
  order_status: String,
  payment_status: String,
  order_mode: String,
  pickup_date:String,
  dishes:{
    type:Array,
    schema:[String]
  }
  
}, {
  "timestamps": {
    "createdAt": {
      "created_at": {
        "type": {
          "value": Date,
          "settings": {
            "storage": "iso"
          }
        }
      }
    },
    "updatedAt": {
      "updated": {
        "type": {
          "value": Date,
          "settings": {
            "storage": "iso"
          }
        }
      }
    }

  }
});

export default dynamoose.model("ManualOrders", OrderSchema);