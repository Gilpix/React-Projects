// import logo from './logo.svg';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";




import Home from "./components/Home";
import GithubUsers from "./components/GithubUsers/User";


import BirthdayReminder from "./components/BirthdayReminder/BirthdayReminder.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/birthday" exact component={() => <BirthdayReminder />} />
          <Route path="/github" exact component={() => <GithubUsers />} />
          {/* <Route path="/contact" exact component={() => <Contact />} /> */}
        </Switch>
        {/* <Footer /> */}
      </Router>


    </div>
  );
}

export default App;
