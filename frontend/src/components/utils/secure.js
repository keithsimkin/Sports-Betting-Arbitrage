import axios from 'axios';

export const addCSRFToken = async () => {
	try {
		let resp = await axios.get("/api/v0")
		return resp.data.csrfToken
	} catch(err) {
		console.log(err)
	}
}