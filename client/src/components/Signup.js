import React,{useState} from "react";
import {useNavigate } from "react-router-dom";
 
const Signup = () => {
    const history = useNavigate ();
    const [user,setUser] = useState({
        name:"",
        email:"",
        phone:"",
        work:"",
        password:"",
        cpassword:""
    });
    let name,value;
    const handleInputs = (e)=>{
        name=e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value});
    }

    const postData = async (e)=>{
        e.preventDefault();
        const {name,email,work,phone,password,cpassword} = user;
       const res = await fetch("/register",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                name,email,phone,work,password,cpassword
            })
       });
       const data  = await res.json();
       if(data.status === 422 || !data){
           window.alert("Invalid Register")
       }else{
        window.alert("Succussful Register")
            history("/login")
       }

     }



  return (
    <>
    <div className="container mt-5"  >
    <h3>Register </h3>
    <form method="post">
    <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            aria-describedby="emailHelp"
            placeholder="Enter Name"
            value={user.name}
            onChange={handleInputs}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={user.email}
            onChange={handleInputs}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Phone</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            aria-describedby="emailHelp"
            placeholder="Enter Phone"
            value={user.phone}
            onChange={handleInputs}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Work</label>
          <input
            type="text"
            className="form-control"
            id="work"
            name="work"
            placeholder="Work"
            value={user.work}
            onChange={handleInputs}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleInputs}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            name="cpassword"
            placeholder="Confirm Password"
            value={user.cpassword}
            onChange={handleInputs}
          />
        </div>
       
        <button type="submit" onClick={postData} className="btn btn-primary">
          Register
        </button>
      </form>

    </div>
    
    </>
  );
};

export default Signup;
