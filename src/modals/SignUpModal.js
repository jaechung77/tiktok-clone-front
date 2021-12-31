import React from 'react';
import { Modal, Button, Form, Container } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';
import HorizontalLine from '../components/HorizontalLine';

const SignUpModal = ({ show, onHide }) => {
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
							<Form.Label>First Name</Form.Label>
							<Form.Control placeholder="Enter your first name" />
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label>Last Name</Form.Label>
							<Form.Control placeholder="Enter your last name" />
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label>Nick Name</Form.Label>
							<Form.Control placeholder="Enter your nick name" />
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="Enter email" />
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Password" />
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control type="password" placeholder="Confirm password" />
						</Form.Group>
					</Form>
				</Modal.Body>
				<Button col-12 variant="info" type="button" className="my-3 w-100">
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
