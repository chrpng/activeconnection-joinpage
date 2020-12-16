import './App.css'
import styled from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll'

import NavBar from './Components/Navbar'

import ActiveConnectionsIcon from './img/ActiveConnections_icon.png'
import SocialMediaIcons from './img/socialmedia.png'
import ActiveConnectionsText from './img/ActiveConnections_text.png'
import HeroBackground from './img/lady-dumbells.png'
import AboutImage from './img/group-exercise.png'


const StyledApp = styled.div`
	background: linear-gradient(to bottom right, #fff, #fff 50%, #ddd);

	main {
		> * {
			padding: 48px;
		}

		.hero {
			background-image: linear-gradient(to bottom right, rgba(191, 233, 244, 0.7), rgba(191, 233, 244, 0.9)), url(${HeroBackground});
			background-repeat: no-repeat;
			background-size: cover;
			background-attachment: fixed;

			padding: 0 240px;
			height: 100vh;

			display: flex;

			&--desc {
				display: flex;
				flex-flow: column;
				align-items: flex-start;
				justify-content: center;

				h1 {
					color: #234daa;
					font-weight: 300;

					&.secondary {
						position: relative;
						left: 48px;
					}
				}

				a {
					color: white;
					text-decoration: none;
					padding: 16px 32px;
					background-color: #234daa;
					border-radius: 4px;
				}
			}

			&--image {
				img {
					width: 100%;
				}
			}
		}

		.about {
			background-color: none;
			display: flex;
			align-items: center;
			> * {
				flex: 1 1 500px;
			}

			&--text {
				
			}
			&--image {
				margin-left: 96px;
				width: 50%;
				.fadeInRightSm {
					animation: fadeInRightSm 1s;
				}
				img {
					width: 100%;
				}
			}
		}

		.videos {
			background-color: rgba(191, 233, 244, 0.9);

			&--grid {
				display: grid;
				grid-template-columns: repeat(3, 1fr);
				
				grid-gap: 24px;

				> * {
					display: flex;
					justify-content: center;
				}

				iframe {
					width: 100%;
				}
			}
		}
	}

	footer {
		padding-top: 48px;
		text-align: center;

		.footer-links {
			position: relative;
			padding-bottom: 24px;
			margin-bottom: 24px;

			display: flex;
			justify-content: space-around;

			a {
				text-decoration: none;
			}

			&::after {
				content: '';
				border-bottom: 1px solid rgba(0,0,0,0.5);
				position: absolute;
				display: inline-block;
				left: 80px;
				right: 80px;
				bottom: 0;
			}
		}
		.social-media-links {
			i {
				font-size: 2em;
				color: #234daa;
				padding: 8px;
			}
		}
		p {
			padding-top: 24px;
			padding-bottom: 24px;
		}
	}

	@keyframes fadeInRightSm {
  from {
    opacity: 0;
    transform: translate3d(20px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
`

function App() {
  return (
    <StyledApp>
			<NavBar />
      <main>
				<div className="hero">
					<div className="hero--desc">
						<ScrollAnimation animateIn="fadeInRight" duration="2"><h1>Exercise</h1></ScrollAnimation>
						<ScrollAnimation animateIn="fadeInRight" duration="2" delay={500}><h1 className="secondary">for <span className="italic">every</span> body</h1></ScrollAnimation>
						<h2>
							Accessible and inclusive fitness
						</h2>
						<a href="https://www.bridgesrc.org/">Join Now!</a>
					</div>
				</div>

				<div className="about">
					<div className="about--desc">
						<ScrollAnimation animateIn="fadeIn" offset={200}>
							<h1>
								About
							</h1>
						</ScrollAnimation>
						<ScrollAnimation animateIn="fadeIn" offset={200}>
						<p>
							Active Connections is an accessible and inclusive fitness center designed with the whole
							community in mind. BRIDGES, an Independent Living Center that serves people with
							disabilities, received a grant from the Mother Cabrini Health Foundation to implement an
							accessible fitness center that overcomes barriers to fitness for people with disabilities who are at
							increased risk for heart disease and secondary illnesses, obesity, and social isolation.
						</p>
						</ScrollAnimation>
						<ScrollAnimation animateIn="fadeIn" offset={200}>
						<p>
							BRIDGES partnered with Active Physical Therapy and Wellness to form Active Connections
							and provide an accessible, affordable space for people with disabilities to exercises alongside the
							rest of the community. Active Connections provides a way to increase fitness, lose weight,
							reduce blood pressure, and increase health outcomes.
						</p>
						</ScrollAnimation>
					</div>
					<div className="about--image">
						<ScrollAnimation animateIn="fadeInRightSm" offset={300}>
							<img src={AboutImage} alt="group exercise"/>
						</ScrollAnimation>
					</div>
				</div>

				<div className="videos">
					<ScrollAnimation animateIn="fadeIn" offset={200}>
						<h1>
							Videos
						</h1>
					</ScrollAnimation>
					<div className="videos--grid">
						<iframe title="Wrist Prep Routine" src="https://www.youtube.com/embed/mSZWSQSSEjE"></iframe>
						<iframe title="Posture correction" src="https://www.youtube.com/embed/LT_dFRnmdGs"></iframe>
						<iframe title="Muppets" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
					</div>
				</div>
      </main>
			<footer>
				<div className="footer-links">
					<a href="https://www.bridgesrc.org/">BRIDGES</a>
					<a href="http://www.activesopt.com/">Active Physical Therapy</a>
				</div>
				<div className="social-media-links">
					<a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
					<a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
					<a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
				</div>
				<p>© A Partnership of BRIDGES and Active Physical Theraphy, 2020.</p>
			</footer>
    </StyledApp>
  );
}

export default App;
