import React from 'react'
import introBg from '../assets/intro_bg.mp4';
import './BackgroundVideo.css';

const BgVideo = ({ videoSrc, loop }) => {
  return (
    <div className="background-video">
      <video autoPlay muted loop className="video">
        <source src={introBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default BgVideo