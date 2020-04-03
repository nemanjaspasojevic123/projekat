import React, { useEffect, useState } from 'react';
import { getAllVideos } from '../services/PixabayServices';
import { Filter } from './components/Filter';
import { Logout } from './components/LogOut';
import Video from './components/Video';
import { useHistory } from 'react-router-dom';


const DisplayVideos = () => {
  const [videos, setVideos] = useState([]);
  const [pomocniVid, setPomocniVid] = useState([]);
  const [perPage, setPerPage] = useState(25);
  const [page, setPage] = useState(0);
  const [isfiltered, setIsFilterd] = useState(false);

  const pageNumber = () => (videos.length - 1) / perPage;
  const pages = pageNumber => {
    let pages = [];
    for (let i = 0; i < pageNumber; i++) {
      pages.push(i);
    }
    return pages;
  };

  useEffect(() => {
    getAllVideos().then(response => {
      setVideos(response);
    });
  }, [])


  const handleInput = (e) => {
    if (e.target.value === '') {
      setIsFilterd(false)
      setPomocniVid([]);
      return
    }
    let filteredVid = videos.filter(el => el.tags.includes(e.target.value));
    setPomocniVid(filteredVid);
    setIsFilterd(true)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  const history = useHistory();

  const handleDisplay = (e) => {
    history.push('display');
  }
  const handleDisplayUser = (e) => {
    history.push('profile');
  }

  return (
    <div className="wrapper">
      <div className="form">
        <div className="class-dis">
          <button className="btn-form-dis" onClick={(e) => handleDisplay(e)}>Display Images</button>
        </div>
        <div className="filter">
          <Filter handleInput={handleInput} />
        </div>
        <div>
          <select className="select" onChange={e => setPerPage(e.target.value)}>
            <option value="25"> Items per Page</option>
            <option value="50"> 50</option>
            <option value="75"> 75</option>
            <option value="100"> 100</option>
          </select>
        </div>
        <div className="class-dis">
          <button className="btn-form-dis" onClick={(e) => handleDisplayUser(e)}>My Profile</button>
        </div>
        <div className="logout-btn">
          <Logout />
        </div>
      </div>
      <div className="videos">
        {pomocniVid.length > 0 || isfiltered ? pomocniVid.map((el =>
          <Video key={el.id} video={el} />)) : videos
            .slice(page * perPage, (page + 1) * perPage)
            .map(el => <Video key={el.id} video={el} />)}
      </div>
      <div className="footer">
        <div>
          {pages(pageNumber()).map(page => (
            <button className="btn-form" onClick={() => { setPage(page) }} key={page}>{page + 1}</button>))}
        </div>
        <button className="btn-form" onClick={() => { scrollToTop() }}>Top</button>
      </div>
    </div>
  );
}

export default DisplayVideos;