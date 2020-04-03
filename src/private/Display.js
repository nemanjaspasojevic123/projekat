import React, { useEffect, useState } from 'react';
import { getAllImages } from '../services/PixabayServices';
import Image from './components/Image';
import { Filter } from './components/Filter';
import { Logout } from './components/LogOut';
import { useHistory } from 'react-router-dom';


const Display = () => {
  const [images, setImages] = useState([]);
  const [pomocniImg, setPomocniImg] = useState([]);
  const [perPage, setPerPage] = useState(25);
  const [page, setPage] = useState(0);
  const [isfiltered, setIsFilterd] = useState(false);

  const pageNumber = () => (images.length - 1) / perPage;
  const pages = pageNumber => {
    let pages = [];
    for (let i = 0; i < pageNumber; i++) {
      pages.push(i);
    }
    return pages;
  };

  useEffect(() => {
    getAllImages().then(response => {
      setImages(response);
    });
  }, [])


  const handleInput = (e) => {
    if (e.target.value === '') {
      setIsFilterd(false)
      setPomocniImg([]);
      return
    }
    let filteredImg = images.filter(el => el.tags.includes(e.target.value));
    setPomocniImg(filteredImg);
    setIsFilterd(true)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  const history = useHistory();

  const handleDisplayVideo = (e) => {
    history.push('displayVideo');
  }
  const handleDisplayUser = (e) => {
    history.push('profile');
  }

  return (
    <div className="wrapper">
      <div className="form">
        <div className="class-dis">
          <button className="btn-form-dis" onClick={(e) => handleDisplayVideo(e)}>Display Videos</button>
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
      <div className="images">
        {pomocniImg.length > 0 || isfiltered ? pomocniImg.map((el =>
          <Image key={el.id} image={el} />)) : images
            .slice(page * perPage, (page + 1) * perPage)
            .map(el => <Image key={el.id} image={el} />)}
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

export default Display;