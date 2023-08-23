import axios from "axios";

const TAX_CODE_API_BASE_URL = "https://render-back-test.onrender.com";

class ITservice {

    getCodeDataById(id){
        
        return axios.get(TAX_CODE_API_BASE_URL + "/aaykarsaathi/result/" + id);
        
    }

}
export default new ITservice