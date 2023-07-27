import axios from "axios";

const TAX_CODE_API_BASE_URL = "http://localhost:8080/aaykarsaathi/result";

const USERNAME = "jack";
const PASSWORD = "shukla";


class ITservice {

    getCodeDataById(id){

        const config = {
            headers: {
                Authorization: "Basic " + btoa(`${USERNAME}:${PASSWORD}`),
            },
        };
        
        return axios.get(TAX_CODE_API_BASE_URL + "/" + id, config);
        
    }

}
export default new ITservice