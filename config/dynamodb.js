import dynamoose from 'dynamoose';

import dotenv from 'dotenv'
dotenv.config();

// Create new DynamoDB instance
const ddb = new dynamoose.aws.ddb.DynamoDB({
    "credentials": {
        "accessKeyId": process.env.AWS_ACCESS_KEY_ID,
        "secretAccessKey": process.env.AWS_SECRET_ACCESS_KEY,
    },
    "region": process.env.AWS_DEFAULT_REGION
});

// Set DynamoDB instance to the Dynamoose DDB instance
const dynamoClient = dynamoose.aws.ddb.set(ddb);


export default dynamoClient;
