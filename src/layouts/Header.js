import React, { useState } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import SignUpModal from '../modals/SignUpModal';
import SignInModal from '../modals/SignInModal';

const Header = () => {
	const [signUpModalOn, setSignUpModalOn] = useState(false)
	const [signInModalOn, setSignInModalOn] = useState(false)
  return (
		<>
		<SignUpModal show={signUpModalOn} onHide={()=>setSignUpModalOn(false)} />
		<SignInModal show={signInModalOn} onHide={()=>setSignInModalOn(false)} />
    <header>
			<Container>
				<Navbar bg="light" expand="lg">
					<Navbar.Brand>TikTok</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<Nav.Link>
								<Button variant="secondary"
								>
									Upload
								</Button>
							</Nav.Link>
							<Nav.Link>
								<Button 
									variant="primary"
									onClick={()=> setSignInModalOn(true)}
								>
									Sign In
								</Button>
							</Nav.Link>
							<Nav.Link>
								<Button 
									variant="primary"
									onClick={()=> setSignUpModalOn(true)}
								>
									Sign Up
								</Button>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
		 	</Container>
    </header>
		</>
  )
}

export default Header
