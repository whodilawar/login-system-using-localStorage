import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);



    const register = async ()=>{

    }

   






    const hundleChage=(e)=>{
        const {id , value} = e.target;
        if(id === "username"){
            setFirstName(value);
        }
       
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }
    }

    
    const handleSubmit  = () => {
       // console.log(firstName,email,password,confirmPassword);
        let ob = {
            firstName: firstName,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
          }
          let olddata = localStorage.getItem('registerUser');
          if(olddata==null){
            olddata = []
            olddata.push(ob)
            localStorage.setItem('registerUser', JSON.stringify(olddata));

            navigate('/login')

          }else{
            let oldArr = JSON.parse(olddata)
            oldArr.push(ob)
            localStorage.setItem("registerUser", JSON.stringify(oldArr))
            // console.log(oldArr,'hhg')
            navigate('/login')
          }
    }





  return (
    <>
      {" "}
      <div id="login-box">
        <div className="left">
          <h1>Sign up</h1>
          <input type="text" name="username"  placeholder="Username" onChange={hundleChage} id="username" />
          <input type="text" name="email" placeholder="E-mail" id="email"  onChange={hundleChage}/>
          <input type="password" name="password" placeholder="Password" id="password" onChange={hundleChage}/>
          <input
            type="password"
            name="password2"
            placeholder="Retype password" id="confirmPassword" onChange={hundleChage}
          />
          <input type="submit" name="signup_submit" defaultValue="Sign me up" onClick={handleSubmit} />
        </div>
        <div className="right">
          <span className="loginwith">
            Sign in with
            <br />
            social network
          </span>
          <button className="social-signin facebook">
            Log in with facebook
          </button>
          <button className="social-signin twitter">Log in with Twitter</button>
          <button className="social-signin google">Log in with Google+</button>
        </div>
        <div className="or">OR</div>
      </div>
    </>
  );
};

export default RegisterPage;
