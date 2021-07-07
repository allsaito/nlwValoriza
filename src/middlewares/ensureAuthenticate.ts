import {Request, Response, NextFunction} from "express"
import { verify } from "jsonwebtoken"

interface Ipayload{
    sub: string
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){

    const authToken = request.headers.authorization
    
    if(!authToken){
        return response.status(401).end()
    }

    const [,token] = authToken.split(" ") 

    
    try {
        const { sub } = verify(token, "c645ac1ef1bf682aa330530a865919c1") as Ipayload
        
        request.user_id = sub

        return next()
    } catch (err) {
        response.status(401).end()
    }


}
