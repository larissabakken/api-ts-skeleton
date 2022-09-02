import { Request, Response } from "express";
import User from "../models/User";

const UserController = {
    async create(req: Request, res: Response): Promise<Response> {
    const { name, age, email, password } = req.body;
    
    const user = await User.create({name, age, email, password});
    return res.json(user);
    // await User.create(req.body)
    // .then(data => {
    //     return res.json(data)
    // })
    // .catch(error => {
    //     console.log("esta caindo aqui!")
    //     return res.status(400).json(error.original)
    // })

    // return res.status(500)
    }
};

export default UserController;