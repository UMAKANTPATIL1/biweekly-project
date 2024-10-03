// src/Card.js

import React from 'react';
import '../Components/cards.css' // Import the CSS file for styling

// import Row from 'bootstrap'
// { body, image, name,score_count,rank }
const Cards = (props) => {
    const renderMedal = () => {
        switch (rank) {
          case 1:
            return <img src="https://img.freepik.com/free-vector/number-one-star-label-golden-color_1017-32238.jpg"style={{background:'transparent'}} alt="Gold Medal" className="medal" />;
          case 2:
            return <img src="https://i.pinimg.com/564x/86/48/60/8648605926a3112f8ac6d0972aba53a8.jpg" alt="Silver Medal" className="medal" />;
          case 3:
            return <img src="https://img.freepik.com/premium-vector/third-place-medal-isolated-white-background_666746-130.jpg" alt="Bronze Medal" className="medal" />;
          default:
            return null;
        }
    }
    const{ id,body, image, name,score_count,rank }=props
  return (
   <>
   
    <div className="card ">
      {rank && <div className="medal-container">{renderMedal()}</div>}
      <div className='card-author emp-id'>{id}</div>
      <img src={image} alt={name} className="card-image" />
      <div className="card-content">
        
        <p className="card-body">{body}</p>
        <p className="card-author">{name}</p>
        <hr className='divider'></hr>
        <p className="card-author">Score Count: {score_count}</p>
      </div>
    </div>
    </>
  );
};

export default Cards;
