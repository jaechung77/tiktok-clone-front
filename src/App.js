import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from './layouts/Layout'
import PostListing from './containers/PostListing'
import PostDetail from './containers/PostDetail'

function App() {
  return (
    <Layout>
    <Container style={{minHeight: "75vh"}}>
      {/* <Router>
      <Routes>
        <Route path="/"  element={<PostListing />} />
        <Route path="/post/:postID"  element={<PostDetail/>} />
        <Route>404 Not Found!</Route>
      </Routes>
      </Router> */}
    </Container>
    </Layout>
  );
}

export default App;
