export class UserRepository{
    constructor(UserModel){
        this.User=UserModel;// OJO ESTO ES UN ATRIBUTO USER

    }
    async create(data){
        return this.User.create(data);

    }
    async findAll(){
        return this.User.find();
    }
    async findByID(id){}
    async updateByid(id,data){}
    async deleteByid(id){}
    async deleteByid(email){}
    
}