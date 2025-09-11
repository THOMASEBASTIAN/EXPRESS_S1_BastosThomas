import "dotenv/config";
import  Express  from "express";
import { Database } from "./config/db";

import { UserController } from "./controllers/userController";
import { UserModel } from "./models/userModel";
import { UserService } from "./services/userService";
import {userRoutes} from "./routes/userRoutes";
import { UserRepository } from "./repositorio/userRepository";

class App{
    constructor(){
        this.app = Express();
        this.port=process.env.PORT;
        this.db= new Database(process.env.URI);
    }
    async init(){
        await this.db.connect;
        this.app.use(express.json());//Middleware básico para JSON
        this.app.get("/", (req,res)=>{
            res.json({
                ok:true,
                service:"SERVICIO CRUD DE USUARIO"
            })
        });
    //Inyección de dependencias para User
    const userRepo = new UserRepository(UserModel);
    const userSrv = new UserService(userRepo);
    const userCtrl= new UserController(userSrv); 
    
    //Rutas
    this.app.use("/api/users",buildUserRouter(userCtrl));

    //Arranque
    this.app.listen(this.port,()=>{
        console.log("Server running on :"+this.port);
    })
}
}
const app = new App();
app.init();