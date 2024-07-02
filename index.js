import express from 'express';
import expressOasGenerator from 'express-oas-generator'
import recipeRouter from './routes/recipe.js';
import mongoose from 'mongoose';
import categoryRouter from './routes/categoryRoute.js';

//connect Database
await mongoose.connect(process.env.MONGO_URL)


// create express app
const app = express();
//express-oas-generator is use to handle req,res for documentation
expressOasGenerator.handleResponses(app, {
  //tags show how your endpoints are grouped
  tags: ['categories', 'recipes'],
  mongooseModels: mongoose.modelNames()
})


//apply middlewares: apply before the routes(express.json)
app.use(express.json())
app.use(express.static('uploads'));



// use routes
app.use(recipeRouter);
app.use(categoryRouter);
expressOasGenerator.handleRequests();
app.use((req, res) => res.redirect('/api-docs'));
//listen for incoming req
const port = process.env.PORT || 8899;
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});


