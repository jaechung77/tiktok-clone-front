import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import { useParams} from 'react-router-dom'
import request from '../constants/Requests'

const Hashtag = () => {
	const [ hashtags, setHashtags ] = useState([])
	const { postID } = useParams()
	const nickName = sessionStorage.getItem('nickName')

	useEffect(()=>{
			async function fetchData() {
				const resp = await axios.get(`${request.fetchHashtags}/${postID}/hashtags`)
				setHashtags(resp.data)
				return resp
		}
		fetchData()
	}, [postID])

	const renderHashtag = 	hashtags && hashtags.map((hashtag) =>{
		return <div key={hashtag.id}>#{hashtag.tag}<br/></div>
	})

	return (
		<Card border="light" style={{ width: '18rem', height: '18rem' }}>
			<Card.Header>{nickName}</Card.Header>
			{ hashtags &&
				<Card.Text>
					{renderHashtag}
				</Card.Text>
			}
		</Card>
	)
}

export default Hashtag
