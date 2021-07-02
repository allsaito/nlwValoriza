import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"
import {sign} from "jsonwebtoken"
import { compare } from "bcryptjs"

interface IAuthenticateRequest{
    email: string,
    password: string
}

class AuthenticateUserService{
    async execute({email, password}){
        const usersRepositories = getCustomRepository(UsersRepositories)

        //Verufica se e-mail existe
        const user = await usersRepositories.findOne({
            email
        })
        if(!user){
            throw new Error ("Email/Password incorrect")
        }
        //Verificação da senha
        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error ("Email/Password incorrect")    
        }
        const token = sign({
            email: user.email, 
        }, "c645ac1ef1bf682aa330530a865919c1",{
            subject: user.id,
            expiresIn: "1d"
        })
        return token
    }
}

export {AuthenticateUserService}