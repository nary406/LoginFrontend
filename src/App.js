import Login from "./Components/Login"
import Home from "./Components/Home"
import NotFound from "./Components/NotFound"
import ProtectedRoute from "./Components/protecctedRoutes"
import './app.css';

import { Route,Router,Navigate,BrowserRouter, Routes } from 'react-router-dom';

const App = () => (
   
    <BrowserRouter>
   <Routes>
      <Route exact path="/login" element={<Login/> } />
     <Route element={<ProtectedRoute/>}>
     <Route exact path="/" element={<Home/>} />
     
     </Route>
      <Route path="*" element={<NotFound/>}/>
      </Routes>
   </BrowserRouter>
 
  
)

export default App;
