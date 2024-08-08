import React from 'react'
import styled from 'styled-components'

const LoginContainer = styled.div`
	position: relative;
	width: 700px;
`
const LoginHeader = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	h1 {
		width: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		font-weight: 600;
		font-size: 30px;
		color: #65B946;
	}
`
const LoginDecoration = styled.div`
	position: absolute;
	z-index: 0;
	img:first-child {
		position: absolute;
		top: 60px;
		left: 595px;
	}
	img:last-child {
		position: absolute;
		top: 380px;
		left: -58px;
	}
`
const LoginContent = styled.div`
	position: relative;
	z-index: 1;
	width: 700px;
	height: 600px;
	background-color: #fff;
	border-radius: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 25px;
	form {
		width: 75%;
		height: 70%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 30px;
		div.logo {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			img {
				width: 100px;
				height: 100px;
			}
			h2 {
				font-weight: 600;
				color: #65B946;
				font-size: 1.5rem;
			}
		}
		div.password-input {
			position: relative;
			img.password-img {
				cursor: pointer;
				width: 20px;
				height: 20px;
				position: absolute;
				right: 20px;
				top: 50%;
				transform: translateY(-50%);
			}
		}
		div {
			width: 100%;
			input {
				width: calc(100% - 40px);
				height: 24px;
				padding: 18px 20px 18px 20px;
				border: solid 1.5px #c7ccd0;
				border-radius: 10px;
				outline: none;
				gap: 10px;
				font-size: 1rem;
			}
		}
		p {
			width: 100%;
			color: #EA4335;
			font-weight: 600;
			font-size: 1rem;
			margin: 0;
			margin-top: 15px;
		}
		button {
			cursor: pointer;
			width: 80%;
			margin-top: 30px;
			padding: 20px;
			border: solid 1.5px #c7ccd0;
			border-radius: 15px;
			background-color: #65b946;
			color: #fff;
			font-weight: 600;
			font-size: 1rem;
			&:hover,
			&:disabled {
				background-color: #65b94691;
			}
		}
	}
`
function App() {
	const [buttonClicked, setButtonClicked] = React.useState(false)
	const handleClick = React.useCallback(() => {
		setButtonClicked(true)
	}, [])

	const passwordInputRef = React.useRef<HTMLInputElement>(null)
	const handlePasswordImgClick = React.useCallback(() => {
		if (passwordInputRef.current) {
			if (passwordInputRef.current.type === 'password') {
				passwordInputRef.current.type = 'text'
				passwordInputRef.current.title = 'Hide Password'
			} else {
				passwordInputRef.current.type = 'password'
				passwordInputRef.current.title = 'Show Password'
			}
		}
	}, [])

	return (
		<LoginContainer>
			<LoginHeader>
				<h1>Welcome to Admin Panel BisConnect</h1>
			</LoginHeader>
			<LoginDecoration>
				<img src="/src/images/Ellipse.png" alt="logo" />
				<img src="/src/images/Ellipse.png" alt="logo" />
			</LoginDecoration>
			<LoginContent>
				<form>
					<div className="logo">
						<img src="/src/images/login-logo.png" alt="logo" />
						<h2>Sign In</h2>
					</div>
					<div>
						<input type="text" placeholder="Username" />
					</div>
					<div className="password-input">
						<input ref={passwordInputRef} type="password" placeholder="Password" />
						<img
							className="password-img"
							alt="logo"
							src="/src/images/password.png"
							onClick={handlePasswordImgClick}
							title="Show Password"
						/>
						{buttonClicked && <p>Incorrect Username or password, please try again.</p>}
					</div>
					<button type="button" onClick={handleClick}>Sign In</button>
				</form>
			</LoginContent>
		</LoginContainer>
	)
}

export default App
