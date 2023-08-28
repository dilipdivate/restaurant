// indexjs file for our express api
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();
import routes from './routes/index.js'
const app = express();
const PORT = process.env.PORT || 4000;
import errorMiddleware from './middleware/error.js';
import dynamoClient from './config/dynamodb.js'
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


/*
    our api endpoints will be accessed on the route
    /api/members/ on the members.js file
*/
app.use('/', routes)

// app.all('*', (req, res) => {
//     return apiResponse.notFoundResponse(res, 'Page not found');
//   });
  
// app.use((err, req, res) => {
// if (err.name == 'UnauthorizedError') {
//     return apiResponse.unauthorizedResponse(res, err.message);
// }
// });

// Middleware for Errors
app.use(errorMiddleware);

// listening port
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
