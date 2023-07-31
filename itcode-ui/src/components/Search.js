import React,{ useRef, useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import Select from 'react-select'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Search = () => {

  const navigate = useNavigate();
  const form = useRef();
    const inView = useInView({
          threshold: 0,
          triggerOnce: true,
        });

    const [taxCode, setTaxCode] = useState({
      code: "",
      section: "",
    })

    useEffect(() => {
      const token = Cookies.get("authToken");
      if(!token){
        navigate("/login");
      }
    }, [])

    const [message, setMessage] = useState("")


    const searchTax = (e) => {
      if(taxCode.code !== ""){
        e.preventDefault();
        const searchValue = taxCode.code + taxCode.section
        navigate(`/result/${searchValue}`)
      }
      else{
        e.preventDefault();
        setMessage("Please Make Selections")
      }
        

    }

    const handleChange = (name, value) => {
      setTaxCode({ ...taxCode, [name]: value });

    };

  const codeList = [
    { value: "80", label: "80"},
    { value: "139", label: "139"},
    { value: "128", label: "128"},

  ]

  const sectionList = [
    { value: "TTB", label: "TTB"},
    { value: "C", label: "C"},
    { value: "CCD", label: "CCD"},
    { value: "CCC", label: "CCC"},
    { value: "TTA", label: "TTA"},
  ]

  const goBack = () => {
    navigate("/services");
  }


  return (
    <div
     className="text-white font-semibold p-0 font-mono"
    >
    TRY<br />
    <div className="font-bold text-3xl text-green-600 tracking-tight">TAX CODE SEARCH</div>
    <div className="h-screen flex flex-col text-white items-center justify-center">
        <form
        action=""
        ref={form}
        className="contactForm text-black"
        initial={{ x: "-10vw", opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        onSubmit={searchTax}
        >
      <div className="border border-solid p-5 -mt-16">
      <div className="text-red-500 flex justify-start ml-2">{message}</div>
        <div className="p-2 flex flex-row justify-center">
          <label className="text-white mr-32 text-lg">Select Tax Code</label>
          <Select
            className="text-black"
            onChange={(selectedOption) => handleChange("code", selectedOption.value)}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                backgroundColor: state.isFocused ? 'white' : 'grey',
                color: 'black',
                width: '300px',

              }),
            }}
            options={codeList}
            placeholder="Select The Tax Code"
          
          />
          </div>
          <div className="p-3  flex flex-row">
          <label className="text-white mr-32 text-lg">Select Section</label>
          <Select
            className="text-black ml-2"
            onChange={(selectedOption) => handleChange("section", selectedOption.value)}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                backgroundColor: state.isFocused ? 'white' : 'grey',
                color: 'black',
                width: '300px',

              }),
            }}
            options={sectionList}
            placeholder="Select The Section"
          
          />
        </div>
        <button className="bg-green-400 focus:bg-green-500 p-2 mt-5 mb-5 rounded-lg w-32">Search</button>
        <button className="bg-red-500 focus:bg-green-500 p-2 mt-5 mb-5 rounded-lg w-32 ml-5" onClick={goBack}>Back</button>
      </div>
        </form>
    </div>
    </div>
  )
}

export default Search
