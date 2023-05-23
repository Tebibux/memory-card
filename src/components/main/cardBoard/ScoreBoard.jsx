import React, { useState } from 'react';
import CardBoard from './CardBoard';
function ScoreBoard() {
  return (
	<div className='score-board'>
		<h3>Your Score: {CardBoard.handleScore}</h3>
		<h3>High Score: 17</h3>
	</div>
  );
}

export default ScoreBoard;