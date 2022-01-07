import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './containers/Home'
import Show from './containers/Show'
import Upload from './containers/Upload'
import Followings from './containers/Followings'

function App() {
  return (
    <Layout>
    <Container style={{minHeight: "75vh"}}>
      <Router>
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/post/:postID"  element={<Show/>} />
          <Route path="/upload"  element={<Upload/>} />
          <Route path="/followings"  element={<Followings/>} />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </Container>
    </Layout>
  );
}

export default App;
