import { inView } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ITservice from '../services/ITservice';
import Cookies from 'js-cookie';

const ResultForm = () => {
    const form = useRef();
    const { code } = useParams();
    const navigate = useNavigate();

    const goBack = () =>{
        navigate("/search");
    }

    const [taxCode, setTaxCode] = useState({
        id: code,
        description: "",
        doclink: "",
        applicable: "",
    })

    useEffect(() => {
      const token = Cookies.get("authToken");
      if(!token){
        navigate("/login");
      }

      const fetchData = async () => {
        try{
          const response = await ITservice.getCodeDataById(taxCode.id);
          setTaxCode(response.data);
        }
        catch(error){
          setTaxCode({
            id: code,
            description: "No Data Found",
            doclink: "No Data Found",
            applicable: "No Data Found",
          })
        }
      }
      fetchData();
    }, [])
    
    
    return (
        <div className="bg-black text-white font-semibold p-0 font-mono">
        Here are your requested<br />
        <div className="font-bold text-3xl text-green-600 tracking-tight">RESULTS</div>
        <div className="flex flex-row h-screen items-center justify-center  font-mono mr-10">
        <div className="text-white flex items-center -mt-16 justify-center font-semibold ">
          <form
          action=""
          ref={form}
          className="registerForm text-black border border-solid flex flex-col justify-start p-5"
          
          initial={{ x: "-10vw", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          onSubmit={goBack}
        >
          <h4 className="contentTitle font-bold text-2xl" style={{textAlign: "left"}}>CODE INFO</h4>
          <div className="formGroup">
            <div className="flex justify-start ml-2">
              <label className="text-green-400">Tax Code</label>
            </div>
            
            <input
              type="text"
              className="formControl"
              value={taxCode.id}
              
              id="code"
              name="req_code"
              placeholder="TAX CODE"
              required
              readOnly
            />
          </div>
          <div className="formGroup">
          <div className="flex justify-start ml-2">
              <label className="text-green-400 -mt-5 lg:mt-auto">Tax Description</label>
            </div>
            <textarea
              className="formControl tracking-widest text-lg"
              
              value={taxCode.description}
              name="description"
              id="codeDescription"
              rows="5"
              placeholder="DESCRIPTION"
              required
              readOnly
            ></textarea>
          </div>
          <div className="formGroup" style={{ display: "inline-block" }}>
          <div className="flex justify-start ml-2">
              <label className="text-green-400 mt-5 lg:mt-auto">Documentation Link</label>
            </div>
            <input
              type="text"
              className="formControl"
              
              value={taxCode.doclink}
              id="link"
              name="doc_link"
              placeholder="DOCUMENTATION LINK"
              required
              readOnly
            />
          </div>
          <div className="col-12 formGroup">
          <div className="flex justify-start ml-2">
              <label className="text-green-400">Applicable For</label>
            </div>
            <input
              type="text"
              className="formControl"
              
              value={taxCode.applicable}
              id="applicable"
              name="applicable_for"
              placeholder="APPLICABLE FOR"
              required
              readOnly
            />
          </div>
          <div className="">
            <button className="bg-green-600 rounded-2xl text-lg p-2 w-32 focus:bg-green-400">BACK</button>
            
          </div>
        </form>
        </div>
        </div>
        </div>
      )
}

export default ResultForm
