import "reflect-metadata"
import express, { NextFunction, Request, request, Response, response } from "express"
import "express-async-errors"
import "./database"
import { router } from "./routes"

const app = express()

// app.get("/test", (request, response) => {
//     return response.send("Olá NLW")
// })
 
// app.post("/test-post", (request, response)=> {
//     return response.send("Olá Post NLW")
// })

app.use(express.json())

app.use(router)

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof Error){
        return response.status(400).json({
            error: err.message
        })
    }
    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
})

app.listen(3000, () => console.log('Server is running') )

//Código1 #together
//Código2 #unidade
//Código3 #embuscadeevolução
//Código4 #legacy
//Código5 #