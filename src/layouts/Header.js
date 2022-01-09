import React, { useState } from 'react';
import { Navbar, Nav, Container  } from 'react-bootstrap';
import SignUpModal from '../modals/SignUpModal';
import SignInModal from '../modals/SignInModal';
import { Navigate } from 'react-router'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import HomeIcon from '@mui/icons-material/Home';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import { green } from '@mui/material/colors';
import Search from '../containers/Search';
import { LinkContainer } from 'react-router-bootstrap';



const Header = () => {
	const loginSuccess = sessionStorage.getItem('nickName')
	const [signUpModalOn, setSignUpModalOn] = useState(false)
	const [signInModalOn, setSignInModalOn] = useState(false)
	const userName = loginSuccess



	const handleSignout = () => {
		sessionStorage.removeItem('nickName')
		sessionStorage.removeItem('userID')
		console.log("EEEEEEEEEEE")
		window.location.href = '/'
	}

  return (
		<>
		{/* position: "fixed", */}
		<SignUpModal show={signUpModalOn} onHide={()=>setSignUpModalOn(false)} />
		<SignInModal show={signInModalOn} onHide={()=>setSignInModalOn(false)} />
    <header id="header">
			<Container style={{width: "70%"}}>
				<Navbar bg="light" expand="lg" id="top_nav" >
					<Navbar.Brand  href="/">TikTok</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<Stack direction="row" spacing={2}>
								<Search />
								<Nav.Link href="/Followings">
										<HomeIcon style={{fontSize: '45px'}} />
								</Nav.Link>
								<Nav.Link href="/Followings">
									<PeopleOutlineIcon style={{fontSize: '45px'}} />
								</Nav.Link>	
								<Nav.Link href="/Upload">
									<FileUploadIcon style={{fontSize: '45px'}} />
								</Nav.Link>	
								{ loginSuccess && loginSuccess !== ""
								?  
								<>
								<Nav.Link>
									<Avatar   sx={{ bgcolor: green[900]}} onClick={handleSignout}>
										{userName.charAt(0).toUpperCase()}
									</Avatar>	
								</Nav.Link>
								</>
								:
								<>
								<Nav.Link>
										<Avatar src="/broken-image.jpg" onClick={()=> setSignInModalOn(true)}/>
								</Nav.Link>
								</>
								}
							</Stack>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
		 	</Container>
    </header>
		</>
  )
}

export default Header
