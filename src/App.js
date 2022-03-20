import {Route, Routes} from 'react-router-dom';
import HomePage from './components/home/HomePage';
import './App.css';
import Header from "./components/common/Header";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
      <div className="App">
          <Header/>
          <Routes>
              <Route exact path='/' element={<HomePage/>} />
              <Route path='*' element={<PageNotFound/>} />
          </Routes>
      </div>
  );
}

export default App;
