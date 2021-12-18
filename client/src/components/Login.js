import React,{useState} from "react";
import {useNavigate } from "react-router-dom";

const Login = () => {
    const history = useNavigate ();
    const [user,setUser] = useState({
        email:"",
        password:"",
            });
    let name,value;
    const handleInputs = (e)=>{
        name=e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value});
    }

    const LoginUser = async(e)=>{

        e.preventDefault();
    const {email,password} = user;
   
    const res = await  fetch('/signin',{
       
          method:"POST",
          headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            email,password
        })
      });

      const data = res.json();
      if(data.status === 400 || !data){
        window.alert("Invalid Login")
        }else{
        window.alert("Succussful Login")
            history("/")
        }

    }



  return (
    <>
      <div className="container mt-5">
          <h3>Login </h3>
        <form method="post">
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
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
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

          <button type="submit" onClick={LoginUser} className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
