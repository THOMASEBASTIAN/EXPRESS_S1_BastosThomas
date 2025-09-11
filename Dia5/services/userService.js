export class UserService{
    constructor(userRepository){
        this.repo=userRepository
    }

    async createUser(dto){
        const exists=await this.repo.findByEmail(dto.email);
        if(exists){
            throw  new Error('el email ya estaba registrado');
        }
        return await this.repo.create(dto);
    }
    async listUser(){
         return await this.repo.findALL({limit:10});
    }
    async getUser(id){
        return this.repo.findById(id);
    }
    async updateUser(id,dto){
      const update = await this.repo.udpateById(id,dto);
      if (!update){
        throw new Error("Usuario no existe pails");
        }
        return update;
      }
      async deleteUser(id){
        const deleted= await this.repo.deleteById(id);
        if(!deleted){
            throw new Error("Usuairo no existe pailas");
            
        }
      }

    }
   