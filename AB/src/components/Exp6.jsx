import React from 'react';
import { useState, useEffect } from 'react';

function Exp6() {
    const [formdata, setformdata] = useState({
        name="",
        email="",
        password=""
    });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState("");
    const [apiData, setapiData] = useState(null);

    useEffect(() => {
        fetch("")
        .then((response) => response.json())
        .then((data) => setapiData(data.title))
    }, []);

    const validate = () => {
        let temp = {};
        if(!formdata.name) temp.name = "Name is required";
        if(!formdata.email.includes("@")) temp.email = "Invalid email";
        if(formdata.password.length < 6) temp.password = "Password must be >6";

        setErrors(temp);
        return Object.keys(temp).length === 0;
    };

    const handleSubmit= (e) => {
        e.preventDefault();
        if(validate()) {
            setSuccess("Registration Successfull!");
            setErrors({});
        }else{
            setSuccess("");
        }
    };

     const handleChange= (e) => {
        setformdata({...formdata, [e.target.name]: e.target.value});
    };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>
      <p style={{fontSize: "12px"}}>
        API Title: {apiData ? apiData : "Loading..."}
      </p>

      <form onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="Name" onChange={onChange} />
      </form>
    </div>
  )
}

export default Exp6;