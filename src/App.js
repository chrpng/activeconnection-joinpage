import './App.css';
import styled from 'styled-components';

const StyledApp = styled.div`
	background: linear-gradient(to bottom right, #fff, #ddd);
	padding: 24px;
	height: 100vh;

	nav {
		display: flex; 
		justify-content: space-between;
		align-items: center;

		> * {
			flex-grow: 1;
		}

		img {
			flex-grow: 0;
			width: 400px;
		}

		.links {
			display: flex;
			justify-content: flex-end;

			a {
				margin-left: 24px;
				color: white;
				text-decoration: none;
				padding: 8px 16px;
				background-color: #234daa;
				border-radius: 8px;
			}
		}
	}

	main {
		display: flex;
		justify-content: center;
		align-items: center;
		h1 {
			color: #234daa;
			font-weight: bolder;
		}

		a {
			color: white;
			text-decoration: none;
			padding: 8px 16px;
			background-color: #234daa;
			border-radius: 8px;
		}
	}
`

function App() {
  return (
    <StyledApp>
			<nav>
				<img src="https://www.bridgesrc.org/wp-content/uploads/2020/01/BRIDGES_Logo_R1.png" alt="logo" />
				
				<div className="links">
					<a href="https://www.bridgesrc.org/">About</a>
					<a href="https://www.bridgesrc.org/">Contact</a>
				</div>
				
			</nav>
      <main>
				<div className="hero">
					<h1>
						Active<br/>Connection
					</h1>
					<a href="https://www.bridgesrc.org/">Join Now!</a>
				</div>
				<img src="https://www.helpguide.org/wp-content/uploads/man-in-wheelchair-exercising-768.jpg" alt="Man using bands" />
      </main>
    </StyledApp>
  );
}

export default App;
