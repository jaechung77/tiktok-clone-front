import React, { useEffect, useState} from 'react';
import axios from 'axios';


const AutoLogin = () => {
	const [nickName,  setNickName] = useState("") 
	// useEffect( ()=>{
		const config = {
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token')
			}
		}

		axios.get("auto_login", config)
		.then(res => {
			setNickName(res.data.user)
			// console.log(user)
		})
		.catch(err => {
			console.log(err)
		})

	// }, [])
}

export default AutoLogin
