import React, { useState } from 'react'
import { Container, Button, Form, InputGroup } from 'react-bootstrap';
import request from '../constants/Requests'
import axios from 'axios';
import '../App.css'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { useNavigate } from 'react-router-dom';
import requests from '../constants/Requests'

const Profile = () => {

	const [ error, setError ] = useState(null)
	const [ newPassword, setNewPassword ] = useState("")
	const [ oldPassword, setOldPassword ] = useState("")
	const [ newPasswordConfirm, setNewPasswordConfirm ] = useState("")
	const [ updateSuccess, setUpdateSuccess ] = useState(false)

	const userID = sessionStorage.getItem('userID')
	const navigate = useNavigate()

	const nickName = sessionStorage.getItem('nickName')

	const errorDiv = error ?
		<Form.Label  
			className="error" 
			style={{color: 'red'}}
		>
			{error}
		</Form.Label>
		:
		 ''

	const data = {
		id: sessionStorage.getItem('userID'),
		password: oldPassword,
		new_password: newPassword,
	}

	const postPasswordChange = async () => {
		try {
			const response =   await axios.post(requests.postPasswordChange, data)
			console.log("Line 81", response.data)
			setUpdateSuccess(true)
			console.log("updateSuccess", updateSuccess)
			return response.data
		}
		catch(err) {
			// console.log(err.response.data.error)
			setError(err.response.data.error)
			setUpdateSuccess(false)
		}
	}


	const isValid = () => {
		if (oldPassword === ""){
			setError("Please type your current password!")
			return false
		}
		if (newPassword === ""){
			setError("Please type new password!")
			return false
		}
		if (newPasswordConfirm === ""){
			setError("Please confirm new password!")
			return false
		}
		if ( newPassword !== newPasswordConfirm ) {
			setError("New Password and New Password Confirmation are not matched!!")
			return false
		}
		return true
	}


	const handleSubmit = (e) => {

		e.preventDefault();

		if (!isValid()){
			setUpdateSuccess(false)
			return null
		}	
		postPasswordChange()
		.then(res => {
			if (res){
				navigate({ pathname:'/'})
			}
		})
	}	

	return (
		<div className="app">
			<div className="app__mobile_form">
				<Container className="bezel">
					<div className="inner_bezel">
						<div style={{color: "blue", textAlign:"center"}}>
							CHANGE YOUR PASSWORD
						</div>
			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-3">
					<Form.Label>Nick Name</Form.Label>
					<Form.Control
						type="text"
						value={nickName}
					/>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Old Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Type Current Password"
						onChange={e => setOldPassword(e.target.value)}
					/>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>New Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Type New Password"
						onChange={e => setNewPassword(e.target.value)}
					/>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Confirm New Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Confirm New Password"
						onChange={e => setNewPasswordConfirm(e.target.value)}
					/>
				</Form.Group>


				<div style={{height: "10vh"}}>{errorDiv}</div>
			
				<Button
					variant="info"
					type="submit"
					className="my-3 col-12"
				>
					Post
				</Button>
			</Form>
			</div>
			<div style={{textAlign: 'center'}}>
				<CircleOutlinedIcon style={{fontSize: '60px', paddingTop: "7px"}}/>
			</div>
			</Container>
			</div>
		</div>
	)
}

export default Profile
