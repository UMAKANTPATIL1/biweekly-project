// src/LocalDataFetcher.js

import React, { useEffect, useState } from 'react';
import Cards from '../Components/Cards'; // Import the Card component
// import './LocalDataFetcher.css'; // Import additional CSS for layout
import '../Components/cards.css'
import BgVideo from './BgVideo';
import bgVideo from "../assets/intro_bg.mp4"

const LocalDataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/Data.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const sortedCardData = [...data].sort((a, b) => b.score_count - a.score_count);

  const rankedCardData = sortedCardData.map((item, index) => ({
    ...item,
    rank: index < 3 ? index + 1 : null // Only top three get ranks
  }));

  return (
    <>
    <BgVideo videoSrc={bgVideo} loop={true} />
    <div className="card-container row-3">
      {rankedCardData.map(item => (
        <Cards key={item.id} id={item.id} title={item.title} body={item.body} image={item.image} name={item.name} score_count={item.score_count} rank={item.rank} />
      ))}
    </div>
    </>
  );
};

export default LocalDataFetcher;
