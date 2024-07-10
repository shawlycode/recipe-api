import express from 'express';
import expressOasGenerator from 'express-oas-generator'
import session from 'express-session';
import recipeRouter from './routes/recipe.js';
import mongoose from 'mongoose';
import categoryRouter from './routes/categoryRoute.js';
import cors from 'cors'
import userRouter from './routes/userRoutes.js';

//connect Database
await mongoose.connect(process.env.MONGO_URL)
console.log('Database connected')

// create express app
const app = express();
//express-oas-generator is use to handle req,res for documentation
expressOasGenerator.handleResponses(app, {
  //tags show how your endpoints are grouped
  tags: ['categories', 'recipes'],
  mongooseModels: mongoose.modelNames()
})

//apply middlewares: apply before the routes(express.json)
app.use(cors());
app.use(express.json())
app.use(express.static('uploads'));
//adding sessions
app.use(session({
  //get session-secret key from the https://gist.github.com/dehamzah/3db8fec14d19af50f7fcba2e74bdfb26
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }


}));




// use routes
app.use(userRouter)
app.use(recipeRouter);
app.use(categoryRouter);
expressOasGenerator.handleRequests();
app.use((req, res) => res.redirect('/api-docs'));
//listen for incoming req
const port = process.env.PORT || 8899;
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});


