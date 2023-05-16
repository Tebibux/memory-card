import React from 'react';
import myImage from '../../../Asset/01_Gojjam.jpg';

function CardBoard() {
	return (
		<div className='card-board'>
			<div className="img-box">
				<img src={myImage} alt="" />
				<div className="text">
					<p>1</p>
					<p>Hareri</p>
				</div>
			</div>
		</div>
	);
}

export default CardBoard;