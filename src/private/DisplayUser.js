import React, { useState, useEffect } from 'react'
import { getUserById } from '../services/coetus.services'
import { User } from './components/User'
import { useHistory } from 'react-router-dom'

export const DisplayUser = () => {
    const [user, setUser] = useState({})

    useEffect(() => {
        getUserById(localStorage.getItem("id")).then(res => {
            console.log(res.data.user)
            setUser(res.data.user)
        })
    }, [])

    let history = useHistory();

    const handleDisplay = () => {
        history.push('display')
    }

    const handleDisplayVideo = (e) => {
        history.push('displayVideo');
    }
    return (
        <div>
            <div className="class-dis">
                <button className="btn-form-dis" onClick={(e) => handleDisplay(e)}>Display Images</button>
            </div>
            <div className="class-dis">
                <button className="btn-form-dis" onClick={(e) => handleDisplayVideo(e)}>Display Videos</button>
            </div>
            <div>
                {<User user={user} key={user.user_id} />}
            </div>
        </div>
    )
}
