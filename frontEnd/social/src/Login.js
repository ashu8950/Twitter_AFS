import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import '../src/CSS/login.css';
import axios from 'axios';
import Logo from '../src/assets/svg/logoBlack.avif';

export default function Login() {
  const navigate=useNavigate()
  // const btnhandller=()=>{
  //   navigate("/posts")
  // }
  const [Username,setUsername]=useState('')
  const [Password,setPassword]=useState('')
  const[loginError,setLoginError]=useState('' )
  const handleUsername=(event)=>{
        console.log(event);
        setUsername(event.target.value);
  }
  const handlePassword=(event)=>{
    console.log(event);
    setPassword(event.target.value);
  }
  const handleForm = async (event) =>{
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/login", {
        username: Username,
        password: Password
      });
      
      if (res.status === 200) {
        localStorage.setItem("jwtToken", res.data.token);
        navigate('/Option');
      }
    } catch (error) {
      console.error("Error during login request:", error);
      // Set an appropriate error message for the user
      setLoginError("An error occurred during login. Please try again later.");
    }
    
  

    // if(Username==='ashu'&&Password==='ashu1234'){
    //   navigate('/posts');
    // }
    // else{
    //   setLoginError("Invalid username and Password");
    // }
  }
  return (
    <div className='main'>
      
      <div className='Sign_in'>
        <form onSubmit={handleForm}>
        <div className="homepage_topRight1">
          <img className="logo1" src={Logo} alt="logo" />
          <h2 className="homepage_topRight__subtitle">Sign in to X</h2>
        <div className="homepage_topRight__Buttons">
            <button className="primary__button">Sign in with Google</button>
            <button className="primary__button">Sign in with Apple</button>

            <h4>or</h4>

            <input type='text' placeholder='Username' value={Username} onChange={handleUsername}></input>
          
            <input type='password' placeholder='Password' value={Password} onChange={handlePassword}></input>
            
            <button>Sign in</button>
            <button className="primary__button">Forget Password</button>

            <div className="homepage_topRight__Buttons1">
              <h3>Dont't have an account?</h3>
              <button className="primary__button"><a href='/login' className='link'>Sign up</a></button>
            </div>
            </div>
            </div>
        </form>
      </div>
    </div>
  )
}










{/* <form onSubmit={handleForm}>
        <label>Username: </label>
         <input type='text' value={Username} onChange={handleUsername}></input>
         <br></br><br></br>
         <label>Password: </label>
         <input type='password' value={Password} onChange={handlePassword}></input>
         <br></br><br></br>
        <button>Submit</button>
</form> */}



{/* <h2>{loginError}</h2> */}