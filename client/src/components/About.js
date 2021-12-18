import React, { useEffect,useState } from 'react'
import {useNavigate } from "react-router-dom";


function About() {
    const history = useNavigate ();
    const [userData,setUserData] = useState(); 

    const callAboutPage  = async ()=>{
        try{
            const res = await fetch("/about",{
                method: "GET",
                headers:{
                    Accept:"application/json",
                    "Content-type":"application/json",
                },
                credentials:"include"
            });

            const data = await res.json();
            debugger;
            console.log(data);
           
            setUserData(data);

            if(!res.status === 200){
                const error = new Error(res.error);
                throw error;
            }

        }catch(err){
            
            history("/login")
        }   
     }

    useEffect(() => {
        
        callAboutPage();
      
    },[]);

    return (
        <div>
             <div>
                 <form method='GET'>
                
            <p className='pt-5'>WelCome About us </p>
            <h1>We Are The Mern Developer      { userData.name } </h1>
            </form>
        </div>
        </div>
    )
}

export default About
