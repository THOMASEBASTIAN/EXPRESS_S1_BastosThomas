export class UserController{
     constructor(userService){
        this.service=userService;
     }
     //Ojo ta estamos manejando aqui el body/parametros/etc del resquest
     create= async (req,res)=>{};
     list= async (req,res)=>{};
     get= async (req,res)=>{};//obtener por id desde el endPoint
     update= async (req,res)=>{};
     delete= async (req,res)=>{};
}