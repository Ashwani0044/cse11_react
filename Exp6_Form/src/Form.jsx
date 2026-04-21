import React from 'react';
import { useState, useEffect } from 'react';

function Form() {
    const [formdata, setformdata] = useState({
        name:"",
        email:"",
        password:"",
    });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState("");
    const [apiData, setapiData] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/1")
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
      <p style={{fontSize: "20px", color:"blue"}}>
        API Title: {apiData ? apiData : "Loading..."}
      </p>

      <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input name="name" type="text" placeholder="Name" onChange={handleChange} />
            {errors.name && <p style={{color:"red"}}>{errors.name}</p>}
            <label>Email:</label>
            <input name="email" type="text" placeholder="Email" onChange={handleChange} />
            {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
            <label>Password:</label>
            <input name="password" type="password" placeholder="Password" onChange={handleChange} />
            {errors.password && <p style={{color:"red"}}>{errors.password}</p>}
            <br />
            <button type="submit">Submit</button>
            {success && <p style={{color:"green"}}>{success}</p>}
            
      </form>
    </div>
  )
}

export default Form;