import axios from "axios";

const TAX_CODE_API_BASE_URL = "http://localhost:8080/api/v1/result";

class ITservice {

    getCodeDataById(id){
        
        return axios.get(TAX_CODE_API_BASE_URL + "/" + id);
        
    }

}
export default new ITservice