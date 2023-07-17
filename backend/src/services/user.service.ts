import UserModel  from '../models/user.model';
import {UserConfig} from '../utilities/interface/user';

const model = new UserModel()
export default class UserService {
    public async add(userData: UserConfig) {
        console.log('service', userData)
        return model.add(userData);
    }
    
    public async get(id: number) {
        return model.getById(id);
    }

}


// export default {
//     add,
//     get,
// };