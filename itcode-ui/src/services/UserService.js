import axios from "axios";

const IT_USER_BASE_API_URL = "http://localhost:8080/aaykarsaathi/register";

class UserService {

    saveUser(user){
        return axios.post(IT_USER_BASE_API_URL, user);
    }
    
}
export default new UserService
