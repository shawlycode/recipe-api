import express from 'express';
import recipeRouter from './routes/recipe.js';
import mongoose from 'mongoose';

//conect Database
await mongoose.connect(process.env.MONGO_URL)
// create express app
// POST

const app = express();
//apply middlewares: apply before the routes
app.use(express.json())

//define routes and defining end-points
app.get('/', (req, res) => {
  res.json('Home Page')
})

app.post('/login', (req, res) => {
  res.json('Login Successful')
})
app.patch('/products', (req, res) => {
  res.json('Product Edited successfully')
})
app.delete('/product/id', (req, res) => {
  res.json('Product:1112 deleted successfully')
})



// use routes
app.use(recipeRouter);
//listen for incoming req
app.listen(3000, () => {
  console.log('App listening on port 3000')
});


