import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { setToken, setId } from '../../services/auth.service';
import { logInUser } from '../../services/coetus.services';


const LogIn = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const history = useHistory();

    const handleClick = () => {
        console.log('login',username,password);
        logInUser(username, password).then(res => {
            setToken(res.data.token);
            setId(res.data.user.user_id);
            history.push('display');
        }) 
    }

    return(
        <form  className="login-container" onSubmit={(e) => { 
            e.preventDefault(); 
            handleClick()}}>
                <h3>Log In</h3>
            <div className="input-form">
            <input type="text" id="username" placeholder="Username" 
            onInput={(e) => setUsername(e.target.value)} />
            </div>
            <div className="input-form">
            <input type="password" id="password" placeholder="Password" 
            onInput={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="btn-form">
            <input type="submit" value="Log In" />
            </div>
        </form>
    )
}
export default LogIn

