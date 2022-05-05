import React, { useState } from 'react'
import { Container, Button, Form, InputGroup } from 'react-bootstrap';
import request from '../constants/Requests'
import axios from 'axios';
import '../App.css'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { useNavigate } from 'react-router-dom';

const Upload = () => {
	const [title, setTitle] = useState("")
	const [content, setContent] = useState("")
	const [viewer, setViewer] = useState("")
	const [comment, setComment] = useState("")
	const [videoFile, setVideoFile] = useState("")
	const [error, setError] = useState(null)
	const [hashtags_attributes0, setHashtags_attributes0] = useState("")
	const [hashtags_attributes1, setHashtags_attributes1] = useState("")
	const [hashtags_attributes2, setHashtags_attributes2] = useState("")
	const [uploadSuccess, setUploadSuccess] = useState(null)
	const formData = new FormData()
	const userID = sessionStorage.getItem('userID')
	const navigate = useNavigate()

	const errorDiv = error ?
		<Form.Label
			className="error"
			style={{color: 'red'}}
		>
			{error}
		</Form.Label>
		:
		 ''
	const getExtension = (filename) => {
		const parts = filename.name.split('.')
		return parts[parts.length - 1]
	}

	const isVideo = (filename) => {
		const ext = getExtension(filename);
		switch (ext.toLowerCase()) {
			case 'm4v':
			case 'avi':
			case 'mpg':
			case 'mp4':
				return true;
		}
		return false;
	}

	const isValid = () => {
		if (title === ""){
			setError("Title cannot be empty")
			return false
		}
		if (content === ""){
			setError("Content cannot be empty")
			return false
		}
		if (videoFile === ""){
			setError("You must upload video file")
			return false
		}
		// if (!isVideo(videoFile)) {
		// 	setError("The file format is not supported")
		// 	return false
		// }
		console.log(videoFile)
		return true
	}


	const handleSubmit = (e) => {
		e.preventDefault();

		if (!isValid()){
			setUploadSuccess(false)
			return null
		}	

		formData.append('post[title]', title)
		formData.append('post[content]', content)
		formData.append('post[viewer]', viewer)
		formData.append('post[comment_flag]', comment==='on' ? true : false)
		formData.append('post[file]', videoFile)
		formData.append('post[user_id]', userID)
		formData.append(`post[hashtags_attributes][0][tag]`, hashtags_attributes0)
		formData.append(`post[hashtags_attributes][1][tag]`, hashtags_attributes1)
		formData.append(`post[hashtags_attributes][2][tag]`, hashtags_attributes2)

		async function postVideo() {
			const res = await axios({
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
			return res
		}
			const res = postVideo()
			if (res) {
			  alert("Successfully uploaded")
				navigate({ pathname: '/' })
			}
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
					onChange={e => setHashtags_attributes0( e.target.value)}
				/>
				</InputGroup>
			</>
		)
	})

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
							<InputGroup className="mb-3">
							<InputGroup.Text  id="basic-addon1">#</InputGroup.Text>
								<Form.Control
									id = "${i}"
									type="text"
									placeholder="Enter tag"
									aria-describedby="basic-addon1"
									onChange={e => setHashtags_attributes0( e.target.value)}
								/>
							</InputGroup>
							<InputGroup className="mb-3">
							<InputGroup.Text  id="basic-addon1">#</InputGroup.Text>
								<Form.Control
									id = "${i}"
									type="text"
									placeholder="Enter tag"
									aria-describedby="basic-addon1"
									onChange={e => setHashtags_attributes1( e.target.value)}
								/>
							</InputGroup>
							<InputGroup className="mb-3">
							<InputGroup.Text  id="basic-addon1">#</InputGroup.Text>
								<Form.Control
									id = "${i}"
									type="text"
									placeholder="Enter tag"
									aria-describedby="basic-addon1"
									onChange={e => setHashtags_attributes2( e.target.value)}
								/>
							</InputGroup>
							<Form.Group>
								<Form.Control
									type="file"
									onChange={(e) => setVideoFile(e.target.files[0])}
								/>
							</Form.Group>

							<div style={{height: "10vh"}}></div>
							{errorDiv}

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
