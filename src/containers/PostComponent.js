import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PostComponent = () => {
	const posts = useSelector((state) => state.allPosts.posts)
	const renderPost = posts.map((post) =>{
	const {id, title, content} = post
		return (
			<div className="ui grid container centered">
				<div className="ui placeholder segment">
					<div className="ui two column stackable center aligned page grid" >
						<div className="ui vertical divider"></div>
						<div className="middle aligned row">
							<div className="column lp">
								For You<br/>
								Following<br/>
								Log In<br/>
								Suggested accounts<br/>
								Discover<br/>
							</div>
							<div className="column rp">
								<div className="four column wide" key={id}>
									<Link to={`/post/${id}`}>
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
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	})
	return <>{renderPost}</>
}

export default PostComponent
