import React from 'react';
import {FaGithub} from 'react-icons/fa';
function Footer() {
	const year = new Date();
  return (
	<div>
	  <h4>Tebibux &#169; {year.getFullYear()} </h4>
	  <p>
		<a href="https://github.com/Tebibux/memory-card">
	  		<FaGithub />
		</a>
	</p>
	</div>
  );
}

export default Footer;