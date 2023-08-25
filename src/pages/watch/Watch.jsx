import React from 'react'
import './Watch.scss';
import { ArrowBackOutlined } from '@mui/icons-material';
import { useLocation, Link } from 'react-router-dom';
export default function Watch () {

  const location = useLocation();
  const movie = location.state?.movie || {};
//console.log(location)
if (!movie) {
  return <div>Loading...</div>;
}

return (
  <div className='watch'>
    <Link to='/'>
    <div className="back">
      <ArrowBackOutlined />
      Home
    </div>
    </Link>
    <video
      className="video"
      autoPlay
      progress="true"
      controls
      src={movie.trailer}
    />
  </div>
)
}

