import React from 'react'
import { deleteToken } from '../../services/auth.service'
import { useHistory } from 'react-router-dom';

export const Logout = () => {
const history = useHistory();

    const handleClick = (e) => {
        deleteToken().then(() => {
        history.push('login');
        })
    }

    return(
        <div> 
            <button className="btn-form" onClick={(e) => handleClick(e)}>Log Out</button>
        </div>
    )

}
