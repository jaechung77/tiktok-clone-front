import React, { useState } from 'react';
import { Modal, Button, Form, Container } from 'react-bootstrap';
import { GoogleLogin, GoogleLogout  } from 'react-google-login';
import HorizontalLine from '../containers/HorizontalLine';
import axios from 'axios';
import requests from '../constants/Requests'
import SignUpModal from '../auth/SignUpModal';
import { useCookies } from 'react-cookie'

const SignInModal = ({ show, onHide }) => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [error, setError] = useState(null)
	const [signUpModalOn, setSignUpModalOn] = useState(false)
	const [cookies, setCookie] = useCookies(['accessToken'])
	const [showloginButton, setShowloginButton] = useState(true);
	const [showlogoutButton, setShowlogoutButton] = useState(false);

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
		setShowloginButton(false);
		setShowlogoutButton(true);
};

const onLoginFailure = (res) => {
		show()
};

const onSignoutSuccess = () => {
		alert("You have been logged out successfully");
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
			return null
		}
		fetchLogin()
		.then(res =>{
			logindataSetter(res)
			onHide()
			window.location.reload()
		})
}

const logindataSetter = (resp) => {

	const accessToken = resp.token
	setCookie('accessToken', accessToken, { path: '/'})
	axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
	sessionStorage.setItem('nickName', resp.user);
	sessionStorage.setItem('userID', resp.id);
}

const fetchLogin = async () => {
	try {
		const response =   await axios.post(requests.login, data)
		return response.data
	}
	catch(err) {
		setError(err.response.data.error)
	}
}

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
