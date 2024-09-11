import { Route, Routes } from 'react-router-dom';
import './App.css';
import ListUsers from './Components/ListUsers';
import NavUser from './Components/NavUser';
import { useState } from 'react';
import DescUser from './Components/DescUser';
import PrivateRoute from './Components/PrivateRoute';
import Home from './Components/Home';

function App() {
  const [auth,setAuth] = useState(false)
  return (
    <div>
      <NavUser auth={auth} setAuth={setAuth}/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ListUsers' element={<PrivateRoute auth={auth}><ListUsers/></PrivateRoute>}/>
        <Route path='/DescUser/:id' element={<PrivateRoute auth={auth}><DescUser/></PrivateRoute>}/>
      </Routes>
    </div>
  );
}

export default App;
