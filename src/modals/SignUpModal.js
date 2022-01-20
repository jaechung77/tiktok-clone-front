import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Container } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';
import HorizontalLine from '../components/HorizontalLine';
import axios from 'axios';
import requests from '../constants/Requests'
import { useCookies } from 'react-cookie'


const SignUpModal = ({ show, onHide }) => {
	const [signupSuccess, setSignupSuccess] = useState(null)
	const [nickName, setNickName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [passwordConfirmation, setPasswordConfirmation] = useState("")
	const [error, setError] = useState(null)
	const [cookies, setCookie] = useCookies(['accessToken'])
	const data = {
		nick_name: nickName,
		email,
		password,
	}

	const errorDiv = error ?
		<Form.Label  
			className="error" 
			style={{color: 'red'}}
		>
			{error}
		</Form.Label>
		: ''

	const isValid = () => {
		if (nickName === ""){
			setError("Please type your nick name")
			return false
		}
		if (email === ""){
			setError("Please type your email")
			return false
		}
		if (password === ""){
			setError("Please type password")
			return false
		}
		if (passwordConfirmation === ""){
			setError("Please confirm password")
			return false
		}
		if (password !== passwordConfirmation){
			setError("Password and Password Confirmation are different")
			return false
		}
		return true
	}

	const signupdataSetter = (resp) => {

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


	const handleSignUp = async () => {
		if (!isValid()){
			setSignupSuccess(false)
			return null
		}
		postSignup()
		.then(res => {
			console.log("Returned    " , res)
			// setSignupSuccess(true)
			// console.log("Sign Up Success", signupSuccess)
			// if(signupSuccess){
				signupdataSetter(res)
				console.log("In the if clause")
				onHide()
				window.location.reload()
			// }	
		})

	}

	const postSignup = async () => {
		try {
			const response =   await axios.post(requests.signup, data)

				console.log("Sign up Sucess", signupSuccess)
			console.log("Line 81", response.data)
			return response.data
		}
		catch(err) {
			console.log(err)
			setSignupSuccess(false)
			setError(err)
		}
	}


	return (
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
					<Modal.Title id="contained-modal-title-vcenter">Sign Up</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="mb-3">
							<Form.Label>Nick Name</Form.Label>
							<Form.Control
								placeholder="Enter your nick name"
								value={nickName}
								onChange={e => setNickName(e.target.value)}
							/>
						</Form.Group>

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

						<Form.Group className="mb-3">
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control 
								type="password" 
								placeholder="Confirm password" 
								onChange={e => setPasswordConfirmation(e.target.value)}	
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Button 
					col-12 variant="info" 
					type="button" 
					className="my-3 col-12" 
					onClick={handleSignUp}
				>
					Sign Up
				</Button>


			</Container>
		</Modal>
	)
}

export default SignUpModal
