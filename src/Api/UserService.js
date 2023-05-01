import axios from 'axios';
import API_HOST from './config.js'

const getAllUsers = `${API_HOST}/users`

class UserService {
    getUsers() {
        return axios.get(getAllUsers)
    }
}
const userService = new UserService();
export default userService;
