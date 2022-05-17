import {Route, Routes} from 'react-router-dom';

import Home from './routes/home';
import Resume from './routes/resume';
import Projects from './routes/projects';
import Pindex from './routes/pindex';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/pindex" element={<Pindex/>}/>
      </Routes>
    </div>
  );
}

export default App;
