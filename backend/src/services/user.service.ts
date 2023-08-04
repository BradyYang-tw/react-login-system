import UserModel  from '../models/user.model';
import {UserConfig} from '../utilities/interface/user';

const model = new UserModel()
export default class UserService {
    public async add(userData: UserConfig) {
        // Password base64加密
        const buffer =  Buffer.from(userData.Password, 'utf-8');
        userData.Password = buffer.toString('base64');
        return model.add(userData);
    }
    
    public async getUsers() {
        return model.getUsers();
    }

    public async getUserById(id: number) {
        return model.getById(id);
    }

}


// export default {
//     add,
//     get,
// };