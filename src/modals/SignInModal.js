import React, { useState, useEffect, useCallback } from 'react';
import { Modal, Button, Form, Container } from 'react-bootstrap';
import { GoogleLogin, GoogleLogout  } from 'react-google-login';
import HorizontalLine from '../components/HorizontalLine';
import axios from 'axios';
import requests from '../constants/Requests'
import SignUpModal from '../modals/SignUpModal';
import { useCookies } from 'react-cookie'

const clientId = '187979948908-33g3acpa910mo6i3o30h270n9tn8q9c6.apps.googleusercontent.com'

const SignInModal = ({ show, onHide }) => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [error, setError] = useState(null)
	const [signUpModalOn, setSignUpModalOn] = useState(false)
	const [loginSuccess, setLoginSucess] = useState("")
	const [cookies, setCookie] = useCookies(['accessToken'])
	const [showloginButton, setShowloginButton] = useState(true);
	const [showlogoutButton, setShowlogoutButton] = useState(false);
	const [loginData, setLoginData] = useState(null)
	const [loginClicked, setLoginClicked] = useState(null)

	const errorDiv = error ?
		<Form.Label  
			className="error" 
			style={{color: 'red'}}
		>
			{error}
		</Form.Label>
		: ''

	const data = {
		email,
		password,
	}

	const onLoginSuccess = (res) => {
		console.log('Login Success:', res.profileObj);
		setShowloginButton(false);
		setShowlogoutButton(true);
};

const onLoginFailure = (res) => {
		console.log('Login Failed:', res);
		show()
};

const onSignoutSuccess = () => {
		alert("You have been logged out successfully");
		console.clear();
		setShowloginButton(true);
		setShowlogoutButton(false);
};

const isValid = () => {
	if (email === ""){
		setError("Please type your email")
		return false
	}
	if (password === ""){
		setError("Please type password")
		return false
	}
	return true
}

const handleSignIn =  () => {
		if (!isValid()){
			setLoginSucess(false)
			return null
		}
		fetchLogin()
		.then(res =>{
			console.log("Returned    " , res)
			console.log("login Success", loginSuccess)

				logindataSetter(res)
				console.log("In the if clause")
				onHide()
				window.location.reload()

		})
}

const logindataSetter = (resp) => {

	const accessToken = resp.token
	console.log("Login Data from 66", resp)
	setCookie('accessToken', accessToken, { path: '/'})
	axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
	sessionStorage.setItem('nickName', resp.user);
	sessionStorage.setItem('userID', resp.id);
	console.log("userName from 73", resp.id )
	console.log("userName from 74", resp.user )
	console.log("session>>>>>>", sessionStorage.getItem('nickName'))
	
}


const fetchLogin = async () => {
	try {
		const response =   await axios.post(requests.login, data)
		console.log("Line 81", response.data)
		setLoginSucess(true)
		return response.data
	}
	catch(err) {
		console.log(err.response.data.error)
		setLoginSucess(false)
		setError(err.response.data.error)
	}
}

useEffect(()=>{
	// setLoginSucess(false)
	console.log("triggered")
}, [loginClicked])


	return (
		<>
		<SignUpModal show={signUpModalOn} onHide={()=>setSignUpModalOn(false)} />
		<Modal
			show={show}
			onHide={onHide}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Container>
				{errorDiv}
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">Sign In</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="mb-3">
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type="email"
								placeholder="Enter email"
								onChange={e => setEmail(e.target.value)}
							/>
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Enter password"
								onChange={e => setPassword(e.target.value)}
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Button 
					col-12 variant="info" 
					type="button" 
					className="my-3 col-12" 
					onClick={handleSignIn}
				>
					Sign In
				</Button>

				{/* <HorizontalLine text={"OR"} />
				<GoogleLogin 
					render={renderProps=>{
						return (
							<Button 
								onClick={renderProps.onClick} 
								disabled={renderProps.disabled}
								className="my-3 w-100"
								style={{ backgroundColor: "#1768EF", borderColor: "#1768EF"}}
							>
							<i className="fab fa-google"></i>&nbsp;Sign In with Google
							</Button>
						)
					}}
				/> */}
						<HorizontalLine text={"OR"} />
            { showloginButton ?
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign In"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> : null}

            { showlogoutButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
            }

				<HorizontalLine text={"OR"} />
				<Button 
					col-12 variant="info" 
					type="button" 
					className="my-3 col-12 btn-danger" 
					onClick={(e) => {onHide(); setSignUpModalOn(true)}}
				>
					Sign Up
				</Button>
				<Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
			</Container>
		</Modal>
		</>
	)
}

export default SignInModal
