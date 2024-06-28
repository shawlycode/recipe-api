import express from 'express';
import recipeRouter from './routes/recipe.js';
import mongoose from 'mongoose';
import categoryRouter from './routes/categoryRoute.js';

//connect Database
await mongoose.connect(process.env.MONGO_URL)


// create express app
const app = express();


//apply middlewares: apply before the routes(express.json)
app.use(express.json())



// use routes
app.use(recipeRouter);
app.use(categoryRouter);
//listen for incoming req
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});


