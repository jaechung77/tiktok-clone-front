const API = "https://quiet-plains-45335.herokuapp.com"
const S3 = "https://tt-clone-rails-v4.s3.amazonaws.com/uploads/post/file"
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