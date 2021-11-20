import React from "react";
import ReactDOM from "react-dom";
import { Home } from "./Home";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { Sentiment } from "./Sentiment-page";
import { Gentweet } from "./Gentweet-item";
import { Aboutus } from "./Aboutus";
import { History } from "./History";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route exact path='/'><Redirect to='./login'></Redirect></Route> */}
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/index' element={<Home />} />
          <Route path='/about' element={<Aboutus />} />
          <Route path='/sentiment' element={<Sentiment />} />
          <Route path='/gentweet' element={<Gentweet />} />
          <Route path='/history' element={<History />} />
          {/* <Route exact path='/'><Redirect to='./login'></Redirect></Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/index">
            <Home />
          </Route> */}

        </Routes>
        {/* <Login/> */}
        {/* <Signup/> */}
        {/* <Home/> */}
        {/* <Sentiment /> */}
        {/* <Gentweet/> */}
        {/* <Aboutus/> */}
        {/* <History /> */}

      </Router>
    </>

  );

}

export default App;