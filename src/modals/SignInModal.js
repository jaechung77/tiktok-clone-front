import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Container } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';
import HorizontalLine from '../components/HorizontalLine';
import axios from 'axios';
import requests from '../constants/Requests'
import SignUpModal from '../modals/SignUpModal';

const SignInModal = ({ show, onHide }) => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [error, setError] = useState(null)
	const [signUpModalOn, setSignUpModalOn] = useState(false)
	const [loginSuccess, setLoginSucess] = useState("")
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

	const handleSignIn = (e) => {
		e.preventDefault()
		setError(null)
		axios.post(requests.login, data)
		.then(res => {
				console.log("res>>>", res)
				setError(res.data.error)
				const accessToken = res.data.token


				sessionStorage.setItem('accessToken', accessToken)
				axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
				console.log(res.data)
				console.log(res.data.nick_name)
				sessionStorage.setItem('nickName', res.data.user);
				sessionStorage.setItem('userID', res.data.id);
				console.log("session>>>>>>", sessionStorage.getItem('nickName'))
				setLoginSucess(res.data.id)
		})
		.catch(err => {
			console.log("err>>>>", err)
		})
	}
	console.log("signUp>>>>", signUpModalOn)


		useEffect(()=>{
			if (loginSuccess) {
				console.log("login Success >>>>", loginSuccess)
				onHide()
			}
		}, [loginSuccess])

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
				/>

				<HorizontalLine text={"OR"} />
				<Button 
					col-12 variant="info" 
					type="button" 
					className="my-3 col-12" 
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
