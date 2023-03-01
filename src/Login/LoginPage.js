import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const navigate = useNavigate()
    const [email, setemail] = useState(null);
    const [password,setPassword] = useState(null);
    const [error,setError] = useState(null)

    const hundleChage =(e)=>{
        const {id , value} = e.target;

        if(id === "email"){
            setemail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
       
    }

    const handleSubmit =()=>{
        let olddata = localStorage.getItem('registerUser')
        let oldArr = JSON.parse(olddata)

        oldArr.map(arr=>{
            if(email.length > 0 && password.length > 0){
                if (arr.email === email && (arr.password === password)) {
                    navigate('/homepage')
                  }else{
                    setError('Please check your email or password')
                  }
            }
        })      
    }
  

    const hundleNavigate=()=>{
        navigate('/register')
    }


const student  = {
    name:'shubham',
    age:24,
    adress:'Dig banglow square'
}

//const newStudent={...student ,name:'kimmi'    }

const {...rest}= student

console.log("rest",rest)





  return (
    <> <div id="login-box">
    <div className="left">
      <h1>Login </h1>
      <h5  style={{"color":"red"}}>{error}</h5>
      <input type="text" name="email" placeholder="Email" id='email' onChange={hundleChage} />
      <input type="password" name="password" placeholder="Password" id='password' onChange={hundleChage} />
      <input type="submit" name="signup_submit" defaultValue="Login" onClick={handleSubmit} />
    </div>
    <div className="right" >
      <span className="loginwith">Sign in with<br />social network</span>
      <button className="social-signin facebook"  onClick={hundleNavigate} >Register</button>
      {/* <button className="social-signin twitter">Log in with Twitter</button>
      <button className="social-signin google">Log in with Google+</button> */}
    </div>
    <div className="or">OR</div>
  </div>
</> 
  )
}

export default LoginPage