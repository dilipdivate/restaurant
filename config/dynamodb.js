import {DynamoDBClient} from "@aws-sdk/client-dynamodb";

import dotenv from 'dotenv'
dotenv.config();

const dynamoClient = new DynamoDBClient({ region: process.env.AWS_DEFAULT_REGION});

// (async function () {

//  })();

//  module.exports={
//     dynamoClient
// }

export default dynamoClient;
