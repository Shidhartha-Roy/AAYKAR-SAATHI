import axios from "axios";

const IT_USER_BASE_API_URL = "http://localhost:8080/aaykarsaathi";

class UserService {

    saveUser(user){
        return axios.post(IT_USER_BASE_API_URL+"/register", user);
    }

    loginUser(loginDetails){
        return axios.post(IT_USER_BASE_API_URL+"/login", loginDetails);
    }

    
    
}
export default new UserService
