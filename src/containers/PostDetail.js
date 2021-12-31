import React, { useEffect } from 'react'
import { useParams} from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import {selectedPost, removeSelectedPost} from '../redux/actions/postActions'

const API = "http://localhost:3000/posts/"

const PostDetail = () => {
	const post = useSelector((state) => state.post)
	const { title, content } = post
	const { postID } = useParams()
	const dispatch = useDispatch()
	console.log(post)

	const fetchPostDetail = async () => {
			const response = await axios
			.get(`${API}${postID}`)
			.catch(err =>{
					console.log("Err: ", err)
			})
			dispatch(selectedPost(response.data))
	}
	useEffect(()=>{
			if (postID && postID !== "") fetchPostDetail()
			return () => {
					dispatch(removeSelectedPost())
			}
	}, [postID])

	return (
		<div className="ui grid container centered">
		<div className="ui placeholder segment">
			<div className="ui two column stackable center aligned page grid" >
				<div className="ui vertical divider"></div>
					<div className="middle aligned row">
						<div className="column lp">
								Video<br/>
						</div>
						<div className="column rp">
							<div className="four column wide">
								<div className="ui link cards">
									<div className="card">
										<div className="image">
										</div>
										<div className="content">
											<div className="header">{title}</div>
											<div className="meta">{content}</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
		</div>
</div>
	)
}

export default PostDetail
