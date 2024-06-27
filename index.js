import express from 'express';
import recipeRouter from './routes/recipe.js';
import mongoose from 'mongoose';

//connect Database
await mongoose.connect(process.env.MONGO_URL)


// create express app
const app = express();


//apply middlewares: apply before the routes(express.json)
app.use(express.json())



// use routes
app.use(recipeRouter);
//listen for incoming req
app.listen(3000, () => {
  console.log('App listening on port 3000')
});


