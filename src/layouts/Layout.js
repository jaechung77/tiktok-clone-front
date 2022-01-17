import React from 'react';
import PrimarySearchAppBar from './PrimarySearchAppBar';
import Headertest from './Headertest'
import Footer from './Footer';
import { Container } from 'react-bootstrap';



const Layout = ({children}) => {
	return (
		<>
			<Container style={{ itemPlace: "center"}}>
			<PrimarySearchAppBar />

					{children}

			{/* <Footer /> */}
			</Container>
		</>
	)
}

export default Layout
