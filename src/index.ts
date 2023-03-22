import * as dotenv from "dotenv"
import Express from "express"
import {v4} from "uuid"

dotenv.config();

const App = Express();

const port = process.env.PORT ? Number(process.env.PORT) : 3000;

App.get("/", (request, response) => {
    return response.status(200).json({message: "INSTITUTO POLITECNICO INDUSTRIAL DE LUANDA SERVER"})
})

interface UserProps {
    id: string;
    name: string;
    created_at: Date
}

App.post("/user", (request, response) => {
    const users: UserProps[] = [];
    const {name} = request.body;
    users.push({id: v4(), name, created_at: new Date()});
    
    return response.status(201).json({data: users});
})

App.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
