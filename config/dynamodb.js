import dynamoose from 'dynamoose';

import {DynamoDBClient} from "@aws-sdk/client-dynamodb";

import dotenv from 'dotenv'
dotenv.config();

// const dynamoClient = new DynamoDBClient({ 
//     region: process.env.AWS_DEFAULT_REGION});
const sdk = dynamoose.aws.ddb.DynamoDB;

const dynamoClient = new sdk({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    "region": 'us-east-1',
})

// (async function () {

//  })();

//  module.exports={
//     dynamoClient
// }

export default dynamoClient;
