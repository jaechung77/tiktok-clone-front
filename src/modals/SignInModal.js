import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Container } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';
import HorizontalLine from '../components/HorizontalLine';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setToken, setUserNickname } from '../redux/actions/userActions';

const SignInModal = ({ show, onHide }) => {
	const dispatch = useDispatch()
	const [selfOnHide, setSelfOnHide]= useState(onHide)
	//setSelfOnHide(false)
	//setSelfShow(show)
	console.log("onHide>>", onHide)
	console.log("selfOnHide>>",selfOnHide)
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [error, setError] = useState(null)
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
		axios.post("login", data)
		.then(res => {
				console.log("res>>>", res)
				setError(res.data.error)
				const accessToken = res.data.token
				dispatch(setToken(accessToken))
				dispatch(setUserNickname(res.data.user))

				axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
				console.log(accessToken)
				if (typeof accessToken != undefined){

					onHide = true

				}
		})
		.catch(err => {
			console.log("err>>>>", err)
		})
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
			</Container>
		</Modal>
	)
}

export default SignInModal
