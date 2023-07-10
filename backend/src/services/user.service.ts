import UserModel  from '../models/user.model';
import {UserConfig} from '../utilities/interface/user';

async function add(userData: UserConfig) {
    console.log('service', userData)
    return UserModel.add(userData);
}

async function get(id: number) {
    return UserModel.getById(id);
}

export default {
    add,
    get,
};