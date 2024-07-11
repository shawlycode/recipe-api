import bcrypt from 'bcrypt';
import { UserModel } from '../models/user.js';

//creating register auth fnc
export const register = async (req, res, next) => {
  try {
    //Hashing users password
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    //create new user
    const user = await UserModel.create({
      ...req.body,
      password: hashedPassword,
    });
    //Generate a session to automatically log user in
    req.session.user = { id: user.id }
    //return response
    res.status(201).json('User registered successfully')
  } catch (error) {
    next(error)

  }
};

//creating login auth fnc
export const login = async (req, res, next) => {
  const { email, username, phone, password } = req.body;
  //STEPS TO ALLOW A USER TO LOGIN
  //1.find user using their unique identifier email, username or phone
  const user = await UserModel.findOne({
    $or: [
      { email: email },
      { username: username },
      { phone: phone }
    ]
  });
  if (!user) {
    //use the return keyword because there'e more code to execute
    res.status(401).json('No user found')
  } else {

    //2.verify user password by using the compareSync
    const correctPassword = bcrypt.compareSync(password, user.password);
    if (!correctPassword) {
      res.status(401).json('Invalid credentials');
    } else {
      //3.Generate session for user to enable login
      req.session.user = { id: user.id }
      //Return response
      res.status(200).json('Login successful')
    }


  }

};

//creating logout auth fnc
export const logout = async (req, res, next) => {
  try {
    //destroy session
    await req.session.destroy();
    //return response
    res.status(200).json('Logout Successful')
  } catch (error) {
    next(error)
  }
};

//creating profile auth fnc
export const profile = async (req, res, next) => {
  //find user by ID
  const user = await UserModel
    .findById(req.session.user.id)
    .select({ password: false })
  //Return response
  res.status(200).json(user)
};
