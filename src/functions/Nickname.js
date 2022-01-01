import React from 'react'
import { useSelector } from 'react-redux';

const Nickname = () => {
	const nickname = useSelector((state) => state.nickname.nickname)
	return (
		<div>
			Hello {nickname}
		</div>
	)
}

export default Nickname
