export class UserRepository{
    constructor(UserModel){
        this.User=UserModel;// OJO ESTO ES UN ATRIBUTO USER

    }
    async create(data){
        return this.User.create(data);

    }
    async findAll({ limit= 0}){
        return this.User.find().limit(limit);
    }
    async findByID(id){
        return this.User.findById(id);
    }
    async updateByid(id,data){
        return this.User.findById(id);
    }
    async deleteByid(id){
        return this.User.findByIdAndUpdate(id,data,{new: true});
    }
    async deleteByid(email){
        return this.User.findByIdAndDelte(id);
    }
      
} 