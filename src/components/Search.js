import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

const Search = () => {
  return (
    <div>
			<InputGroup className="pt-3">
				<FormControl
					placeholder="Search accounts"
					aria-label="Recipient's username"
					aria-describedby="basic-addon2"
				/>
				<Button variant="outline-secondary" id="button-addon2">
					<SearchOutlinedIcon />
				</Button>
			</InputGroup>
    </div>
  )
}

export default Search
