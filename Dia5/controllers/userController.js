export class UserController{
     constructor(userService){
        this.service=userService;
     }
     //Ojo ta estamos manejando aqui el body/parametros/etc del resquest
     create= async (req,res)=>{
      try{
         const user = await this.service.createUser(req.body);
          res.status(201).json(user);
      } catch (err){
         res.status(400).json({error: err.message})
      }
     };
     list= async (req,res)=>{
      try{
         const users = await this.service.listUser();
         res.json(users);
      }  catch (Err){
         res.status(500).json({error: err.message});
      }
     };
     get= async (req,res)=>{
       try{
         const user = await this.service.getUser(req.params.id);
         if(!user){
            return res.status(404).json({message: "Usuario  no encontrado"});

        }
        res.json(user);

     } catch (err){
      res.status(400).json({error : err.message});
     }
   }  
 
     update= async (req,res)=>{
      try{
         const updated = await this.service.updateUser(req.params.id,req.body);
         res.json(updated);
      }
       catch (err){
         res.status(400).json({error: err.message})
       }
     };
     delete= async (req,res)=>{
      try{
         const deleted = await this.service.deleteUser(req.params.id);
         res.json ({message: "Usuario eleminado", deleted});

      }
      catch(err){
         res.status(400).json({error: err.message})
      }
     };
}