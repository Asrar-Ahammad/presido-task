import './App.css';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Index from './pages/Index';
import Project from './pages/Project';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={<Index/>}/>
        <Route path='project/:name' element={<Project/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
