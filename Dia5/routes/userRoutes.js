import { Router } from "express";

// Vista
export function buidUserRouter(UserController){
    const router = Router();
    Router.get("/",UserController.list)
    Router.get("/:id",UserController.get)
    Router.post("/",UserController.create)
    Router.put("/:id",UserController.update)
    Router.delete("/:id",UserController.delete)
    
    return router;
}