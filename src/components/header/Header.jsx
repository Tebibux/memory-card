import React, { useRef } from 'react';

function Header() {
	const headerRef = useRef(null);

	const handleMouseMove = (e) => {
		const { left, top, width, height } = headerRef.current.getBoundingClientRect();
		const x = (e.clientX - left) / width;
		const y = (e.clientY - top) / height;
		document.documentElement.style.setProperty('--x', x);
		document.documentElement.style.setProperty('--y', y);
	};
	return (
		<div className="header" ref={headerRef} onMouseMove={handleMouseMove}>
			<h1>Memory Card</h1>
		</div>
	);
}

export default Header;