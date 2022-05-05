const API = "https://quiet-plains-45335.herokuapp.com"
//const API = "http://localhost:3000"
const S3 = "https://tt-clone-api-v1-bucket.storage.googleapis.com/uploads/post/file"
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
  bucket: `${S3}`,
}

export default requests