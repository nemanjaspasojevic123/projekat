import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { setToken, setId } from '../../services/auth.service';
import { registerUser, logInUser } from '../../services/coetus.services';


export const Register = () => {
    const [name,setName] = useState('');
    const [surname, setSurname] = useState('');
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');

    let user = {
        name: name,
        surname: surname,
        username: username,
        password: password,
        email: email,
    }

    const history = useHistory();

    const handleSubmit = () => {
        if(password === confirmPassword){
            registerUser(user).then(() => {
               logInUser(username,password).then(res => {
                   console.log(res)
                   setToken(res.data.token);
                   setId(res.data.user.user_id);
                   history.push('display');
               }) 
            })
        } else {
            alert(`Error`);
        }
    }

    return(
        <form className="register-container" onSubmit={(e) => { 
            e.preventDefault(); 
            handleSubmit()}}>
                <h3>Register</h3>
            <div className="input-form">
            <input type="text" placeholder="Name" 
            onInput={(e) => setName(e.target.value)} />
            </div>
            <div className="input-form">
            <input type="text" placeholder="Surname" 
            onInput={(e) => setSurname(e.target.value)} />
            </div>
            <div className="input-form">
            <input type="text" placeholder="Username" 
            onInput={(e) => setUsername(e.target.value)} />
            </div>
            <div className="input-form">
            <input type="email" placeholder="Email" 
            onInput={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-form">
            <input type="password" placeholder="Password" 
            onInput={(e) => setPassword(e.target.value)} />
            </div>
            <div className="input-form">
            <input type="password" placeholder="Confirm Password" 
            onInput={(e) => setConfirmPassword(e.target.value)} />
            </div>
            <div className="btn-form"><input type="submit" value="Register" /></div>
        </form>
    )
}
