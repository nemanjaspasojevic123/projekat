import React, { useState } from 'react';

const Image = ({ image }) => {
    let {pageURL, largeImageURL, tags, user, views} = image;

    const [isBoxVisible, setIsBoxVisible] = useState(true)
    const zoomImg = () => {
        setIsBoxVisible(!isBoxVisible)
    }

    return (
    <div>
        
        <div className="img">
            <img src={largeImageURL} className={`${isBoxVisible ? "visibleImg" : "hidden"}`} alt="No img" onClick={()=> {zoomImg()}} ></img>
        </div>
        <div className='img-text'>
        <a href={pageURL} target="_blank" rel="noopener noreferrer">
        <button className="btn-form">Go to Original Page</button>
        </a>
        <p>Views: {views}</p>
        <p>Tags: {tags}</p>
        <p>Author: {user}</p>
        <hr/>
        </div>
    </div>
    );
}

export default Image;