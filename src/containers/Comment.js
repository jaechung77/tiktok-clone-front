import React, { useState, useEffect } from 'react'
import { Card, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useParams} from 'react-router-dom'
import request from '../constants/Requests'


const Comment = () => {
	const [ newComment, setNewComment ] = useState("")
	const [clicked, setCllicked ] = useState(false)
	const [ comments, setComments ] = useState([])
	const { postID } = useParams()
	
	const userID = sessionStorage.getItem('userID')	

	useEffect(()=>{
			async function fetchData() {
				const resp = await axios.get(`${request.fetchVideo}/${postID}/comments`)
				console.log("FETCH FROM Hashtags:", resp.data)
				setComments(resp.data)
				setCllicked(false)
				return resp
		}
		fetchData()
	}, [clicked])

	const data = {
		content: newComment,
		post_id: postID,
		user_id: userID,
	}

	const handlePost = async () => {
		async function fetchData() {
			const resp = await axios.post(`${request.fetchVideo}/${postID}/comments`, data)
			console.log("Post FROM Hashtags:", resp.data)
			setCllicked(true)
			console.log("Comment Post button clicked")
			return resp
		}
		fetchData()
	}

	const renderComments = 	comments && comments.map((comment) =>{
		return <>{'@'}{comment.nick_name}: {comment.content}<br/></>
	})

	return <>
		<Card border="light" style={{ width: '18rem', height: '18rem' }}>
			<Card.Header>Comments</Card.Header>
			<Card.Text>
				{renderComments}
			</Card.Text>

			<Form>
				<Form.Group className="mb-3">
					<Form.Control
						placeholder="Write Comment"
						onChange={e => setNewComment(e.target.value)}
					/>
				</Form.Group>
			</Form>
			<Button 
				col-12 variant="info" 
				type="button" 
				className="my-3 col-12" 
				onClick={handlePost}
			>
				Post
			</Button>
		</Card>
		</>
}


export default Comment
