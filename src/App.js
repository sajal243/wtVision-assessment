import './App.scss';
import { data } from './constants/data';
import {info} from "./constants/info";
import Header from './components/Header';
import Item from './components/Item';
import Login from './components/Login';
import Wrapper from './components/Wrapper';
import Body from "./components/Body";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Wrapper data={data}>
          <Routes>
            {data.map((item, i) => (
              <Route key={i} path={`/item/${i}`} element={<Item item={item.value} />} />
            ))}
            <Route path="/" element={<Body data={info} />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Wrapper>
      </Router>
    </div>
  );
}

export default App;
