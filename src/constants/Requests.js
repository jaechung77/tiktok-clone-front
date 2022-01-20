const API = process.env.REACT_APP_SERVER_URL

const requests = {
  API: `${API}`,
  fetchVideos:`${API}/posts`,
  fetchVideos:`${API}/posts`,
  sendVideo: `${API}/posts`,
  login: `${API}/login`,
  signup: `${API}/users`,
  fetchVideo: `${API}/posts`,
  fetchHashtags: `${API}/posts`,
  fetchFollows: `${API}/follows`,
  addLikes: `${API}/posts`,
  showLikes: `${API}/posts`,
  addFollows: `${API}/follows`,
  findFollows: `${API}/follows/1/find`,
  fetchMyposts:`${API}/posts`,
  postPasswordChange: `${API}/password_change`,
}

export default requests