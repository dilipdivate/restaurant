
import dynamoose from 'dynamoose';
import dynamoClient from '../config/dynamodb.js'

const UserSchema = new dynamoose.Schema({

    id: {
        type: String,
        hashKey: true,
      },

    name: String,
    email : String,
    address : String,
    city : String,
    state : String,
    pincode : String,
    password : String,
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
  
    }});
  
  export default dynamoose.model("Members", UserSchema);
