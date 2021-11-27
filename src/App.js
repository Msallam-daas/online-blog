import Home from "./home/Home";
import NavBar from "./navbar/NavBar";
import Single from "./single/Single";
import Write from "./write/Write";
import Settings from "./settings/Settings";
import Login from "./login/Login";
import Register from "./register/Register";
import NavBar0 from "./navbar0/NavBar0";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Post from "./post/post";
import Home0 from "./home0/Home0";
import Header from "./header/Header";
function App() {
  return (
    // <Router>
    //   <NavBar0 />
    //   <Switch>
    //     <Route exact path="/">
    //       <Header />
    //     </Route>
    //     <Route path="/login">
    //       <Login />
    //     </Route>
    //     <Route path="/register">
    //       <Register />
    //     </Route>
    //   </Switch>
    // </Router>
    //////////////////////////////////
    <Router>
      <NavBar />
      <switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/write">
          <Write />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
        <Route path="/single">
          <Single />
        </Route>
      </switch>
    </Router>
  );
}

export default App;
