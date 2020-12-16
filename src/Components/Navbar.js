import React, { useState } from 'react'
import styled from 'styled-components'

import ActiveConnectionsLogo from '../img/ActiveConnections.png'

const navHeight = '100px'

const StyledNav = styled.nav`
	position: fixed;
	z-index: 1;
	width: 100%;
	background: linear-gradient(to right, #fff, #fff 50%, #ddd);

	display: flex; 
	justify-content: space-between;
	align-items: center;
	height: ${navHeight};
	padding: 0 24px;

	box-shadow: 0px 0px 5px #aaa;

	> * {
		flex-grow: 1;
	}

	img {
		flex-grow: 0;
		height: calc(100% - 24px);
	}

	.links {
		display: flex;
		justify-content: flex-end;

		a {
			margin-left: 24px;
			text-decoration: none;
			padding: 8px 16px;
			color: #234daa;
			border-radius: 8px;
		}
	}
`

const Navbar = () => {
	return (
		<StyledNav>
			<img src={ActiveConnectionsLogo} alt="navlogo" />
			
			<div className="links">
				<a href="https://www.bridgesrc.org/">About</a>
				<a href="https://www.bridgesrc.org/">Contact</a>
			</div>
			
		</StyledNav>
	)
}
 
export default Navbar;