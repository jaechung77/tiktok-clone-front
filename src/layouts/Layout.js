import React from 'react';
import Header from './Header';
import Headertest from './Headertest'
import Footer from './Footer';
import { Container } from 'react-bootstrap';



const Layout = ({children}) => {
	return (
		<>
			<Container style={{ itemPlace: "center"}}>
			<Header />

					{children}

			{/* <Footer /> */}
			</Container>
		</>
	)
}

export default Layout
