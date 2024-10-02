// src/Card.js

import React from 'react';
import '../Components/cards.css' // Import the CSS file for styling

const Cards = ({ body, image, name,score_count,rank }) => {
    const renderMedal = () => {
        switch (rank) {
          case 1:
            return <img src="https://thumbs.dreamstime.com/b/number-winner-ribbon-award-badge-gold-medal-white-background-number-winner-ribbon-award-badge-gold-medal-139155753.jpg" alt="Gold Medal" className="medal" />;
          case 2:
            return <img src="https://w7.pngwing.com/pngs/492/739/png-transparent-euclidean-renault-bodywork-st-bernard-wilrijk-ranking-medal-design-text-orange-logo-thumbnail.png" alt="Silver Medal" className="medal" />;
          case 3:
            return <img src="https://png.pngtree.com/png-clipart/20190611/original/pngtree-silver-cup-tournament-ranking-vector-material-png-image_2855416.jpg" alt="Bronze Medal" className="medal" />;
          default:
            return null;
        }
    }
  return (
    <div className="card">
      {rank && <div className="medal-container">{renderMedal()}</div>}
      <img src={image} alt={name} className="card-image" />
      <div className="card-content">
        
        <p className="card-body">{body}</p>
        <p className="card-author">{name}</p>
        <p className="card-author">Score Count: {score_count}</p>
      </div>
    </div>
  );
};

export default Cards;
