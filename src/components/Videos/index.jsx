import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './style.css';
const API_kEY = 'AIzaSyAayccUGl46qB33Vy2e20fshdtBTWW_Js4';
// https://www.googleapis.com/youtube/v3/videos

export const Videos = () => {
  // const [videos, setVideos] = useState([]);
  const [count, setCount] = useState(0);
  const [x, setX] = useState(0);
  const [p, setP] = useState(0);
  const [showVideos, setVideos] = useState([]);

  const navigate = () => {

  }
  const handleRightClick = () => {
    setCount(count+1);
    // setX(x - 100)
    x === -100 * (videos.length - 1) ? setX(0) : setX(x-100);
  }
  const handleLeftClick = () => {
    // setX(x + 100)
    x === 0 ? setX(-100 * (videos.length - 1)) : setX(x + 100);

  }
  useEffect(() => {
    axios.get('https://www.googleapis.com/youtube/v3/videos', {
      params: {
        key:'AIzaSyBcrm-AuCjxn_XWUgIUvxwp-XQ2XIZUST8',
        type: 'video',
        part: 'snippet',
        chart: 'mostPopular'
        // q: searchTerm,
      },
    }).then(({data}) => {
      // setVideos(data.items);
      console.log(data)
    })
  }, []);
  const showItems = 4;
  const currVideos = [];

  useEffect(() => {
    setVideos(currVideos);
  }, [count])

  const videos = [{id: "nMDOSLEVdBw", count: 1}, {id: "nMDOSLEVdBw",  count: 2},{id: "nMDOSLEVdBw",  count: 3},{id: "nMDOSLEVdBw",  count: 4},{id: "nMDOSLEVdBw",  count: 5},{id: "nMDOSLEVdBw",  count: 6},{id: "nMDOSLEVdBw", count: 7},{id: "nMDOSLEVdBw", count: 8},{id: "8yAFmiFa6eI",  count: 9}, {id: "nMDOSLEVdBw", count: 8}, {id: "8yAFmiFa6eI",  count: 9} ];
  for(let i =0; i< videos.length; i++) {
   
      for(let j=0; j<5; j++) {
        if(count>0) {
        currVideos.push(<iframe src={`https://www.youtube.com/embed/${videos[i].id}`} width="300px" height="200" onFocus="handleFocus"/>)
        }
        if(count===0) {
          currVideos.push(<iframe src={`https://www.youtube.com/embed/${videos[i].id}`} width="300px" height="200" onFocus="handleFocus"/>)
          }
    
      }
  }
  return (
    <>
      <div className="content">
        Concept Videos
      </div>
      <div className="videos">
      <div className="left" onClick={handleLeftClick}>{ `<` } </div>
        <div className="slide" style={{transform: `translateX(${x}%)`}}>
          {currVideos}
        </div>
      <div className="right" onClick={handleRightClick}>{ `>` } </div>
      
      </div>
    </>
  )
}