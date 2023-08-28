
import dynamoose from 'dynamoose';
import dynamoClient from '../config/dynamodb.js'
// import mongoose from 'mongoose';
// // const dynamoClient = require("../config/dynamodb")
// import dynamoClient from '../config/dynamodb.js'
// import {DynamoDB, CreateTableCommand} from "@aws-sdk/client-dynamodb";


// const TABLE_NAME = "users"
// var tableParams = {
//     Table : TABLE_NAME
// };

// const createMember = async () => {
   
//     try {
//         return await dynamoClient.send(new CreateTableCommand(tableParams)); 
//         console.log("Success", data);
//         // return data
//         }
//     catch (err) { console.log("Error", err);}    
    
// }

// const addMember = async (member) => {
//     const params = {
//         TableName: TABLE_NAME,
//         Item: member
//     }

//     return await dynamoClient.putItem(params, function(err, data) {
//         if (err) {
//             console.log("Error", err);
//           } else {
//             console.log("Success", data);
//           }
    
// })
// }

// const getMemberById = async (id) => {
//     const params = {
//         TableName: TABLE_NAME,
//         Key: {
//             id
//         }
//     }
//     return await dynamoClient.get(params).promise()
// }
// const getMembers = async () => {
//     const params = {
//         TableName: TABLE_NAME
//     }

//     const members = await dynamoClient.scan(params).promise()
//     console.log(members)
//     return members
// }
// const deleteMember = async (id) => {
//     const  params = {
//         TableName: TABLE_NAME,
//         Key: {
//             id
//         }
//     }

//     return await dynamoClient.delete(params).promise()
// }
// const member = 
//     {
//         id: "6",
//         Name: 'Rainn',
//         Surname: 'Scott',
//         Gender: 'Male',
//         Age: 24
//     }


//  export {
//     // dynamodb,
//     createMember,
//     addMember,
//     getMemberById,
//     getMembers,
//     deleteMember,
//     member
// } 

const UserSchema = new dynamoose.Schema({
    name: String,
    mobileNumber: Number,
});

export default dynamoose.model("Members", UserSchema);