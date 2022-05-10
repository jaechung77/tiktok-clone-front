import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Show from './components/Show'
import Upload from './components/Upload'
import Followings from './components/Followings'
import Header from './layouts/Header'
import Manage from './components/Manage'
import SearchResult from './components/SearchResult'
import Profile from './components/Profile'
import axios from 'axios';
import { useCookies } from 'react-cookie'

function App() {
  const [cookies] = useCookies(['accessToken'])
  axios.defaults.headers.common = {
    'Authorization': 'Bearer ' + cookies.accessToken,
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/show/:postID"  element={<Show/>} />
        <Route path="/upload"  element={<Upload/>} />
        <Route path="/followings/:categoryID"  element={<Followings/>} />
        <Route path="/manage/:userID"  element={<Manage/>} />
        <Route path="/search"  element={<SearchResult/>} />
        <Route path="/profile"  element={<Profile/>} />
        <Route>404 Not Found!</Route>
      </Routes>
    </Router>
  );
}

export default App;
