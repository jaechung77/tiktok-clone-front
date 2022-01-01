import React, { useState } from 'react'
import { Button, Form, Container, InputGroup } from 'react-bootstrap';
import axios from 'axios';

const Upload = () => {
	const [title, setTitle] = useState("")
	const [content, setContent] = useState("")
	const [tag, setTag] = useState("")
	const [viewer, setViewer] = useState("")
	const [comment, setComment] = useState("")
	const [videoFile, setVideoFile] = useState("Upload Boundary File")
	const formData = new FormData()
	const jsonData = {
		title,
		content,
		viewer,
		comment_flag: comment==='on' ? true : false,
		video_url: videoFile,
		user_id: 1,
		hashtags_attributes: [
			{ tag,
			}
		]
	}
	const handleClick = () => {
		formData.append('title', title)
		formData.append('content', content)
		formData.append('viewer', viewer)
		formData.append('comment_flag', comment==='on' ? true : false)
		formData.append('hashtags_attributes',  [{ tag}])
		formData.append('tiktok_file', videoFile)
		formData.append('user_id', 12)
			axios({
				method: "post", 
				url: "posts",
				data: formData,
				headers: 
				{ 
					"Content-Type": "multipart/form-data",

				},
			})
			.then(res => {
					console.log(res)
			})
			.catch(err => {
				console.log(err)
			})
			// console.log(data)
	}
		
	
	return (
		<Container>
			<Form>
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
						rows={3}
						placeholder="Enter content"
						onChange={e => setContent(e.target.value)}
					/>
  			</Form.Group>

				<Form.Label>Tag</Form.Label>
				<InputGroup className="mb-3">
					<InputGroup.Text  id="basic-addon1">#</InputGroup.Text>
					<Form.Control
						type="text"
						placeholder="Enter tag"
						aria-describedby="basic-addon1"
						onChange={e => setTag(e.target.value)}
					/>
				</InputGroup>

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
						onChange={(e) => setVideoFile(e.target.files[0].name)}
					/>
      	</Form.Group>


				<Button
					variant="info"
					type="button"
					className="my-3 col-12"
					onClick={handleClick}
				>
					Post
				</Button>
			</Form>
		</Container>
	)
}

export default Upload
