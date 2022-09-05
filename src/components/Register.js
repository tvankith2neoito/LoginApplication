
import React, { useState, useEffect } from "react";
import Login from './Login';
const Register = () => {
    const [isDone, setDone] = useState(false);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if(users.length !== 0){
        localStorage.setItem('users', JSON.stringify(users));
    }else{
        const user = JSON.parse(localStorage.getItem('users'));
        if (user) {
            setUsers(user);
        }
    }
    
}, [users]);

    const handleSubmit = (event) => {
        event.preventDefault();
        var { email, uname, pass } = document.forms[0];
        let new_user = {useremail: email.value, password: pass.value, username: uname.value};

        setUsers([...users, new_user]);
        alert("User Created");
        setDone(true);
      };
    const renderForm = (
        <div className="form">
            <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Email </label>
              <input type="text" name="email" required />
            </div>
            <div className="input-container">
              <label>Username </label>
              <input type="text" name="uname" required />
            </div>
            <div className="input-container">
              <label>Password </label>
              <input type="password" name="pass" required />
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
        </div>
      );
  return (
    <div>{isDone ? <Login />: renderForm}</div>
  )
}

export default Register