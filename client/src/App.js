import './App.css';
import './components/Navbar.css'
import { Route, Routes, useLocation} from 'react-router-dom'

//components
import Navebar from './components/Navebar'

//pages
import Home from './Pages/Home'
import About from './Pages/About'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'



function App() {
  const location = useLocation();

  // Check if the current location is the Signup page
  const isSignupOrSignin = ['/Signup', '/Signin'].includes(location.pathname);
  return (
    <>
     {/* Conditionally render the Navbar based on the page being viewed */}
     {isSignupOrSignin ? null : <Navebar />}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Signin" element={<Signin/>}/>
        <Route path="/Signup" element={<Signup/>}/>
      </Routes>
      {/* <Contact/> */}
    </>
  );
}

export default App;
