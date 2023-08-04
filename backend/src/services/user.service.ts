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
        const userData = await model.getById(id);
        
        // base64 decode
        // 將 base64 字串轉換成 Buffer
        const buffer = Buffer.from(userData.Password, 'base64');

        // 將 Buffer 轉換成原始的字串
        const decodedString = buffer.toString('utf-8');
        userData.Password = decodedString; 
        return userData;
    }

}


// export default {
//     add,
//     get,
// };