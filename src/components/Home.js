import React, {useState} from 'react'
import Login from './Login';

const Home = ({username}) => {
    const [isLogout, setLogout] = useState(false);
    const logout_func = () =>{
        document.cookie = "undefined";
        setLogout(true);
      };
      const renderHome = (
        <div>
        <h1>Welcome to Home Page, {username.username}</h1>
        <p onClick={logout_func} style={{cursor: 'pointer', color: 'blue'}}>Logout</p>
         </div>
      );
  return (
    <div>
        {isLogout ? <Login /> : renderHome}
    </div>
  )
}

export default Home