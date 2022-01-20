import React from 'react'
import { Button } from 'react-bootstrap';

const handleFollow = () => {
	
}

const Follow = () => {
  return (
    <div>
			<Button
				col-12 variant="danger"
				type="button"
				className="my-3 col-12"
				onClick={handleFollow}
			>
				Follow
			</Button>
    </div>
  )
}

export default Follow
