import React from 'react';

const StartingBoard = ({started}) => {
	const handleClick = () => {
		started(false)
	}
	return (
		<div className='startingBoard'>
			<h2 className='game-starting-text'>
				"Boost memory skills with our immersive card memory game.
				Match image cards, remember numbers, and enjoy a captivating and
				engaging gaming experience!"
			</h2>
			<button className='btn-start' onClick={handleClick}>Start</button>
		</div>
	);
}

export default StartingBoard;