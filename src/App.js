import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import Layout from './layouts/Layout'
import Home from './containers/Home'
import Show from './containers/Show'
import Upload from './containers/Upload'
import Followings from './containers/Followings'
import Header from './layouts/Header'
import Manage from './containers/Manage'
import SearchResult from './containers/SearchResult'
import axios from 'axios';
import { useCookies } from 'react-cookie'

function App() {
  const [cookies] = useCookies(['accessToken'])
  axios.defaults.headers.common = {
    'Authorization': 'Bearer ' + cookies.accessToken
  };


  return (
    // <Layout>
    <Router>
    {/* <Container style={{minHeight: "75vh"}}> */}
        <Header />
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/show/:postID"  element={<Show/>} />
          <Route path="/upload"  element={<Upload/>} />
          <Route path="/followings/:categoryID"  element={<Followings/>} />
          <Route path="/manage/:userID"  element={<Manage/>} />
          <Route path="/search"  element={<SearchResult/>} />
          <Route>404 Not Found!</Route>
        </Routes>

    {/* </Container> */}
    </Router>
    // </Layout>
  );
}

export default App;
