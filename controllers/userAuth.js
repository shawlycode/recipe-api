import bcrypt from 'bcrypt';
import { UserModel } from '../models/user.js';

//creating register auth fnc
export const register = async (req, res, next) => {
  try {
    //Hashing users password
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    //create new user
    await UserModel.create({
      ...req.body,
      password: hashedPassword,
    });
    //return response
    res.status(201).json('User registered successfully')
  } catch (error) {
    next(error)

  }
};

//creating login auth fnc
const login = async (req, res, next) => { };

//creating logout auth fnc
const logout = async (req, res, next) => { };

//creating profile auth fnc
const profile = async (req, res, next) => { };
