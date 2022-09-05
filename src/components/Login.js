import React, { useState, useEffect } from "react";
import Home from "./Home";
import Register from "./Register";

const Login = () => {
    
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setisRegister] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('users'));
    if (user) {
      setUsers(user);
    }
    
  }, []);
  useEffect(() => {
    if(document.cookie !== "undefined"){
        const userData = users.find((user) => user.useremail === document.cookie);
        if(userData){
            setCurrentUser(userData);
            setIsLogin(true);
        }
    }
  }, [users]);
  const handleSubmit = (event) => {
    event.preventDefault();

    var { email, pass } = document.forms[0];

    const userData = users.find((user) => user.useremail === email.value);

    if (userData) {
    setCurrentUser(userData);
      if (userData.password !== pass.value) {
        alert("Username or Password Wrong");
      } else {
        document.cookie = email.value;
        console.log(document.cookie);
        setIsLogin(true);
      }
    } else {
      alert("Username or Password Wrong");
    }
  };
  const register = () =>{
    setisRegister(true);
  };
  const renderForm = (
    
    <div className="form">
        <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Email </label>
          <input type="text" name="email" required />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
      <p onClick={register} style={{cursor: 'pointer', color: 'blue'}}>Register User</p>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        {isLogin ? <Home username={currentUser}/> : isRegister ? <Register /> : renderForm}
      </div>
    </div>
  );
}

export default Login