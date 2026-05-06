import { hash } from 'bcryptjs';
import { User } from '../models/User';
import { AppDataSource } from '../database/data-source';

interface Request {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    public async execute({ name, email, password }: Request): Promise<User> {
        const UserRepository = AppDataSource.getRepository(User);

        const checkUserExists = await UserRepository.findOne({
            where : {email},
        })

        if (checkUserExists) {
            throw new Error('Email address already used.');
        }

        const hashedPassword = await hash(password, 8);

        const user = UserRepository.create({
            name, 
            email,
            password : hashedPassword,
        })

        await UserRepository.save(user);

        return user;
    } 
}

export default CreateUserService;