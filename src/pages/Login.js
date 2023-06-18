// import React, { useState, useEffect } from 'react';
// import './Login.css'
// import {useNavigate} from 'react-router-dom'

// const Login = () => {
  // let navigate = useNavigate();
//   const [usn, setUsn] = useState('');
//   const [password, setPassword] = useState('');
//   const [usnError, setUsnError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [submitted, setSubmitted] = useState(false);

//   useEffect(() => {
//     if (submitted) {
//       if (usnError === '' && passwordError === '') {
//         alert('Sign-in successful!');
//         navigate('/user');
//       } else {
//         alert('Invalid USN or password');
//       }
//     }
//   }, [submitted, usnError, passwordError]);

  // const validateUsn = (value) => {
  //   const usnRegex = /^[0-9][A-Za-z]{2}[0-9]{2}[A-Za-z]{2}[0-9]{3}$/;
  //   if (!value.match(usnRegex)) {
  //     setUsnError('Invalid USN format. Example: 1BM21CS086');
  //   } else {
  //     setUsnError('');
  //   }
  // };

  // const validatePassword = (value) => {
  //   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  //   if (!value.match(passwordRegex)) {
  //     setPasswordError(
  //       'Password should be at least 8 characters long and include a mixture of uppercase, lowercase, and digits.'
  //     );
  //   } else {
  //     setPasswordError('');
  //   }
  // };

//   const handleSignIn = (e) => {
//     e.preventDefault();
//     // this.props.history.push('/dashboard')
//     setSubmitted(true);
//     validateUsn(usn);
//     validatePassword(password);
//   };

//   return (
//     <div>
//       <h1>Sign In</h1>
//       <form onSubmit={handleSignIn}>
//         <div>
//           <label>USN:</label>
//           <input
//             type="text"
//             value={usn}
//             onChange={(e) => {
//               setUsn(e.target.value);
//               if (submitted) {
//                 validateUsn(e.target.value);
//               }
//             }}
//           />
//           {submitted && usnError && <span>{usnError}</span>}
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => {
//               setPassword(e.target.value);
//               if (submitted) {
//                 validatePassword(e.target.value);
//               }
//             }}
//           />
//           {submitted && passwordError && <span>{passwordError}</span>}
//         </div>
//         <button type="submit">Sign In</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
import { useEffect, useState } from "react";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useNavigate} from 'react-router-dom';
import { faEnvelope, faLock, faUser,faBook,faCalendar,faContactCard } from "@fortawesome/free-solid-svg-icons";
import login from "./images/rocket.svg";
import register from "./images/press-play.svg";
 

function Login() {
  let navigate = useNavigate();
  const [usn, setUsn] = useState('');
  const [sem, setsem] = useState('');
  const [email, setemail] = useState('');
  const[branch,setbranch] = useState('');
  const [user, setuser] = useState('');

  const [submitted, setSubmitted] = useState(false);


  // const [password, setPassword] = useState('');
  const [usnError, setUsnError] = useState('');
  const [semError, setSemError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [userError, setUserError] = useState('');
  

  // this is for login
  const[username,setUsername] = useState('');
  const[pass,setPass] = useState('');


  const [signupMode, setSignupMode] = useState("");
    useEffect(() => {
    if (submitted) {
      if (userError === '') {
        alert('Sign-in successful!');
        navigate('/user');
      } else {
        alert('Invalid User');
      }
    }
  }, [submitted, userError]);

  const signupBtn = () => {
    setSignupMode("sign-up-mode");
  };

  const signinBtn = () => {
    setSignupMode("");
  };
  const handlesubmit =() =>{
    validateUsn(usn);
    validateEmail(email);
    validateSem(sem);

    if(semError==='' && usnError===''){
    alert('Sign up successful!')
    }
    
    };
    const handlelogin =() =>{
      validateUser(username);
      setSubmitted(true);
      
    //  console.log(username);
    //  console.log(userError);
  
      // if(userError ===''){
      // alert('Sign in successful!')
      // }
      
      };
    const validateSem = () => {
      const semValue = parseInt(sem);
      if (isNaN(semValue) || semValue < 1 || semValue > 8) {
        alert('Invalid semester value . Enter a value between 1 and 8 (digit)');
        setSemError('Invalid');
        
      } else {
        setSemError('');
      }
    };
   const validateUsn = (value) => {
      const usnRegex = /^[0-9][A-Za-z]{2}[0-9]{2}[A-Za-z]{2}[0-9]{3}$/;
      if (!value.match(usnRegex)) {
        setUsnError('Invalid');
        alert('Invalid USN format. Example: 1BM21CS086');

      } else {
        setUsnError('');
      }
    };
    const validateUser = (value) => {
      const usnRegex = /^[0-9][A-Za-z]{2}[0-9]{2}[A-Za-z]{2}[0-9]{3}$/;
      if (!value.match(usnRegex)) {
        setUserError("blahhh Invalid");
        console.log(userError);
        // alert('Invalid USN format. Example: 1BM21CS086');
        

      } else {
        setUserError('');
      }
    };
    

    const validateEmail = () => {
      const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
      if (!email.match(emailRegex)) {
        alert('Invalid email format');
        setEmailError('Invalid');

      } else {
        setEmailError('');
      }
    };
    
  
    
  return (
    <div className={"app" + " " + signupMode}>
      <div className="forms-container">
        <div className="signin-signup">
          <form onSubmit={handlelogin} className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field" >
              <span className="icon">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <input type="text" value={username}
            onChange={(e) => {
              setUsername(e.target.value);
             
            }}  placeholder="Username" />
            </div>
            <div className="input-field">
              <span className="icon">
                <FontAwesomeIcon icon={faLock} />
              </span>

              <input type="password" value={pass}
            onChange={(e) => {
              setPass(e.target.value);
             
            }} placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
          </form>

          <form onSubmit={handlesubmit} className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <span className="icon">
                <FontAwesomeIcon icon={faContactCard} />
              </span>
              <input type="text"  
            // type="text"
            value={usn}
            onChange={(e) => {
              setUsn(e.target.value);
               
            }}placeholder="USN" />
            </div>
            <div className="input-field">
              <span className="icon">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <input type="text"value={user}
            onChange={(e) => {
              setuser(e.target.value);
             
            }} placeholder="Name" />
            </div> <div className="input-field">
              <span className="icon">
                <FontAwesomeIcon icon={faCalendar} />
              </span>
              <input type="text" value={sem}
            onChange={(e) => {
              setsem(e.target.value);
             
            }} placeholder="Semester" />
            </div>
            <div className="input-field">
              <span className="icon">
                <FontAwesomeIcon icon={faBook} />
              </span>
              <input type="text"value={branch}
            onChange={(e) => {
              setbranch(e.target.value);
             
            }} placeholder="Branch" />
            </div>
            <div className="input-field">
              <span className="icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <input type="email"value={email}
            onChange={(e) => {
              setemail(e.target.value);
             
            }} placeholder="Email" />
            </div>
            
            <input type="submit" value="Sign up" className="btn solid" />
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>
              Join us and dive deep into Oceans of exciting events!!
            </p>
            <button
              className="btn transparent"
              id="sign-up-btn"
              onClick={signupBtn}
            >
              Sign up
            </button>
          </div>
          <img src={login} className="image" alt="" />
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>Already signed up?</h3>
            <p>
              Use your USN as username and name as password
            </p>
            <button
              className="btn transparent"
              id="sign-in-btn"
              onClick={signinBtn}
            >
              Sign in
            </button>
          </div>
          <img src={register} className="image" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login;