import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './containers/Header'
import PostListing from './containers/PostListing'
import PostDetail from './containers/PostDetail'

function App() {
  return (
    <div className="App">

      <Router>
      <Header />
      <Routes>
        <Route path="/"  element={<PostListing />} />
        <Route path="/post/:postID"  element={<PostDetail/>} />
        <Route>404 Not Found!</Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
