import React, { useState } from 'react';
import { Modal, Button, Form, Container } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';
import HorizontalLine from '../components/HorizontalLine';
import axios from 'axios';

const SignUpModal = ({ show, onHide }) => {
	const [nickName, setNickName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const data = {
		nick_name: nickName,
		email,
		password,
	}

	const handleSignUp = () => {
		axios.post("users", data)
		.then(res => {
				console.log(res)
		})
		.catch(err => {
			console.log(err)
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
							<Form.Control type="password" placeholder="Confirm password" />
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
							<i className="fab fa-google"></i>&nbsp;Sign Up with Google
							</Button>
						)
					}}
				/>
			</Container>
		</Modal>
	)
}

export default SignUpModal
