import React, { useState } from 'react'
import { Container, Button, Form, InputGroup } from 'react-bootstrap';
import request from '../constants/Requests'
import axios from 'axios';
import '../App.css'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

const Upload = () => {
	const [title, setTitle] = useState("")
	const [content, setContent] = useState("")
	const [viewer, setViewer] = useState("")
	const [comment, setComment] = useState("")
	const [videoFile, setVideoFile] = useState("")
	const [hashtags_attributes, setHashtags_attributes] = useState([])
	const formData = new FormData()
	const userID = sessionStorage.getItem('userID')

	const handleSubmit = (e) => {
		console.log(hashtags_attributes)
		e.preventDefault();
		formData.append('post[title]', title)
		formData.append('post[content]', content)
		formData.append('post[viewer]', viewer)
		formData.append('post[comment_flag]', comment==='on' ? true : false)
		formData.append('post[file]', videoFile)
		formData.append('post[user_id]', userID)
		hashtags_attributes.map((hashtags_attribute, index) => {
			formData.append(`post[hashtags_attributes][${index}][tag]`, hashtags_attribute)
		})

		for (let key of formData.entries()) {
			console.log(key[0] + ', ' + key[1]);
		}

			axios({
				method: "post",
				url: request.sendVideo,
				data: formData,
				contentType: false,
				cache: false,
				processData: false,
				headers:
				{
					"Content-Type": "multipart/form-data",
				},
			})
			.then(res => {
					console.log(res.data)
			})
			.catch(err => {
				console.log(err)
			})
	}

	const tags = [1, 2, 3].map((e, i) => {
		return(
			<>
				<InputGroup className="mb-3">
				<InputGroup.Text  id="basic-addon1">#</InputGroup.Text>
				<Form.Control
					id = "${i}"
					type="text"
					placeholder="Enter tag"
					aria-describedby="basic-addon1"
					onChange={e => setHashtags_attributes([...hashtags_attributes, e.target.value])}
				/>
				</InputGroup>
			</>
		)
	})

	console.log(tags)

	return (
		<div className="app">
			<div className="app__mobile_form">
				<Container className="bezel">
					<div className="inner_bezel">
			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-3">
					<Form.Label>Title</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter title"
						onChange={e => setTitle(e.target.value)}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
					<Form.Label>Content</Form.Label>
					<Form.Control
						as="textarea"
						rows={2}
						placeholder="Enter content"
						onChange={e => setContent(e.target.value)}
					/>
  			</Form.Group>

				<Form.Label>Tag</Form.Label>
				{tags}

				<Form.Group className="mb-3">
					<Form.Label>Who can view this video</Form.Label>
					<Form.Select aria-label="Default select example"
						onChange={e => setViewer(e.target.value)}
					>
						<option>Open this select menu</option>
						<option value="1">Public</option>
						<option value="2">Friends</option>
						<option value="3">Private</option>
					</Form.Select>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Check 
						type={'checkbox'}
						label={'Allow users to comment'}
						onChange={e => setComment(e.target.value)}
					/>
				</Form.Group>

				<Form.Group>
					<Form.Control
						type="file"
						onChange={(e) => setVideoFile(e.target.files[0])}
					/>
      	</Form.Group>

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

export default Upload
