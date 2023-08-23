import axios from "axios";

const IT_USER_BASE_API_URL = "https://render-back-test.onrender.com";

class UserService {

    saveUser(user){
        return axios.post(IT_USER_BASE_API_URL+"/aaykarsaathi/register", user);
    }

    loginUser(loginData){
        return axios.post(IT_USER_BASE_API_URL+"/aaykarsaathi/login", loginData);
    }

    
    
}
export default new UserService
