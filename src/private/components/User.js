import React from 'react'
import "./User.css"

export const User = ({ user }) => {
    let {user_id, name, surname, username, picture} = user
    return (
        <div className="profile">
            <div className='user-img'></div>
            <p>Name: {name}</p>
            <p>Surname: {surname}</p>
            <p>Username: {username}</p>
            <p>User id: {user_id}</p>
            <img src={picture} alt="No img"></img>
        </div>
    )
}
