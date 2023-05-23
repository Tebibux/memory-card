import React, { useState } from 'react';
import myImages from '../../../Asset/ResourceObject';
function CardBoard() {
	const [randomImage, setRandomImage] = useState(Object.values(myImages));
	const [score, setScore] = useState(0);

	const [existed, setExisted] = useState([]);


	const handleRandomize = () => {
		const shuffledImages = Object.values(myImages).sort(() => Math.random() - 0.5);
		setRandomImage(shuffledImages);
	}
	const handleScore = (e) => {
		// check if the image exits in the score array
		// 
		if(existed.includes(e.target.src)){
			return
		}
		else{
			setScore(score + 1)
			setExisted([...existed, e.target.src])
			console.log(e.target.src);
			handleRandomize();
		}
		return score;
	}


	return (
		<div className='card-board'>
			{
				Object.entries(randomImage).map(([key, image], index = 0) => {
					if (index <= 8) {
						index += 1;
						return (
							<div className="img-box"
								key={key}
								onClick={handleScore}
							>
								<img src={image.path} alt={image.name} />
							</div>
						)
					}
					return null
				})
			}

		</div>
	);
}

export default CardBoard;