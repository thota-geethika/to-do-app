import './App.css';
import ToDoPage from './Pages/ToDoPage'
import Heading from './Components/Heading/Heading'
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Heading/>
      <Routes>
        <Route path="/" element={<ToDoPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
