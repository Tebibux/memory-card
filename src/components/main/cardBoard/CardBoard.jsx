import React from 'react';
import myImage from '../../../Asset/01_Gojjam.jpg';
import myImages from '../../../Asset/ResourceObject';
function CardBoard() {
	return (
		<div className='card-board'>
			{
				Object.entries(myImages).map(([key, image], index = 0) => {
					if (index <= 8) {
						index += 1;
						return (
							<div className="img-box" key={key}>
								<img src={image.path} alt={image.name} />
								<div className="img-text">
									<p>{index}</p>
									<p>{image.name}</p>
								</div>
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