const API = process.env.REACT_APP_SERVER_URL

const requests = {
  API: `${API}`,
  fetchVideos:`${API}/posts`,
  sendVideo: `${API}/posts`,
  login: `${API}/login`,
  signup: `${API}/users`,
  fetchVideo: `${API}/posts`,
  fetchHashtags: `${API}/posts`
}

export default requests