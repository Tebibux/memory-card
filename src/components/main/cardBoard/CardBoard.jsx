import React, { useState } from 'react';
import myImages from '../../../Asset/ResourceObject';
import StatusBoard from './StatusBoard';


const CardBoard = ({ onScoreUpdate, scoreData }) => {
	const [randomImage, setRandomImage] = useState(Object.values(myImages));
	const [existed, setExisted] = useState([]);
	const [gameDecide, setGameDecide] = useState(false);
  
	const handleRandomize = () => {
	  const shuffledImages = Object.values(myImages).sort(() => Math.random() - 0.5);
	  setRandomImage(shuffledImages);
	};
  
	const handleScore = (e) => {
	  if (!existed.includes(e.target.src)) {
		onScoreUpdate(1); // increment the score by 1
		setExisted([...existed, e.target.src]);
		console.log(e.target.src);
		handleRandomize();
	  } else {
		setGameDecide(true); // Change to true when the image already exists
	  }
	};
  
	return !gameDecide ? (
	  <div className="card-board">
		{Object.entries(randomImage).map(([key, image], index) => {
		  if (index <= 8) {
			index += 1;
			return (
			  <div className="img-box" key={key} onClick={handleScore}>
				<img src={image.path} alt={image.name} />
			  </div>
			);
		  }
		  return null;
		})}
	  </div>
	) : (
		<StatusBoard scoreData={scoreData} />
	);
  };
  
export default CardBoard;