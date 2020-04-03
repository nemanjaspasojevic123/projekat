import React from 'react';

const Video = ({ video }) => {
    let {videos, tags, user, views} = video;
    return (
        <>
    <div>
    <div className="vid">
        <video width="640" height="360" controls play="true">
            <source src={videos.small.url} alt="No vid" ></source>
        </video>
        </div>
        <p>Views: {views}</p>
        <p>Tags: {tags}</p>
        <p>Author: {user}</p>
        <hr/>
    </div>
    </>
    );
}

export default Video;

