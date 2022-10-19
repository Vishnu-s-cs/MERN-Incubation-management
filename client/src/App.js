import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom'
import Login from './pages/Login';
import Signup from "./pages/Signup";
import Home from './pages/Home';
import Form from './pages/Form';
import { useContext, useState } from 'react';
import { UserContext } from './context/UserContext';



function App() {
  // const [user, setUser] = useState('')
  // useEffect(() => {
  //   setUser(JSON.parse(localStorage.getItem('user')))
  
   
  // }, [])
  // const [loggedIn, setLoggedIn] = useState(false)
  const {userDetails} = useContext(UserContext)
  const user = userDetails

  // user && setLoggedIn(true)
  // const user = JSON.parse(localStorage.getItem('user'))
  // console.log('user',user);
  return (
    <div className="App">
       <Router>
       <Routes>
          <Route exact path="/" element={user ? <Home />: <Signup/> }/>
          <Route path="/login" element={user ? <Home />: <Login/> }  />
          <Route path="/signup" element={user ? <Home />: <Signup/> }  />
        {user&& <>
          <Route path="/apply" element={<Form/> }  />
        </>
        }
            
            
          


          </Routes>

        </Router>

    </div>
  )
}

export default App;
