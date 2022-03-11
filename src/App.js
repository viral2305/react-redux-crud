
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import AddUser from './pages/addUser';
import EditUser from './pages/EditUser';


function App() {
  return (
    <div className="App">
     <Routes>
       <Route path="/" element={<Home />}></Route>
       <Route path="/addUser" element={<AddUser />}></Route>
       <Route path="/editUser/:id" element={<EditUser />}></Route>
     </Routes>
    </div>
  );
}

export default App;
