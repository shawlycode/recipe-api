import { Router } from "express";
import { register } from "../controllers/userAuth.js";


//create router
const userRouter = Router();


//define routes
userRouter.post('/register', register)





export default userRouter;

