import { Request, Response } from "express";
import { IUser } from "interfaces/user";
import User from "../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const login = async (req: Request, res: Response) => {
  try {
    const body = req.body as Pick<IUser, 'email' | 'password'>;

    if (!body.password || !body.email) {
      return res.status(400).json({status: 400, message: 'Invalid email or password'});
    }
    const user = await User.findOne({ email: body.email }).select('password');
   
    if (!user) {
      return res.status(400).json({status: 400, message: 'Invalid email or password'});
    }

    const passwordMatch = await bcrypt.compare(body.password, user.password);

    if (!passwordMatch) {
      return res
        .status(403)
        .json({ message: 'Authentication failed. Invalid user or password' });
    }

    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.JWT_SECRET!,
      { expiresIn: '1h' }
    )

    return res
      .cookie('x-access-token', token)
      .status(200)
      .json({
      message: 'Authenticated',
      data: { token: token }
    });
  } catch (error) {
    return res.sendStatus(400);
  }
};

const signup = async (req: Request, res: Response) => {
  try {
    const body = req.body as Pick<IUser, 'name' | 'email' | 'password'>;

    if (!body.password || !body.email || !body.name) {
      return res.status(400).json({status: 400, message: 'Full name, email and password is required' });
    }

    const userExist = await User.findOne({ email: body.email });

    if (userExist) {
      return res.status(400).json({status: 400, message: 'Email is invalid or already taken' });
    }

    const password = bcrypt.hashSync(body.password, 10);
    const user = new User({
      name: body.name,
      email: body.email,
      password: password,
    });

    const newUser = await user.save();

    return res
      .status(201)
      .json({ message: "User registered", data: newUser })
      .end();
  } catch (error) {
    return res.sendStatus(400);
  }
};

export { login, signup };