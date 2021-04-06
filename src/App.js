// import logo from './logo.svg';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";




import Home from "./components/Home";
import GithubUsers from "./components/GithubUsers/User";
import SubscriptionList from "./components/SubscriptionList/SubscriptionList";
import Navbar from "./components/SharedComp/Navbar";


import BirthdayReminder from "./components/BirthdayReminder/BirthdayReminder.js";
import NumberCruncher from './components/NumberCruncher/NumberCruncher';
import MoviesWorld from './components/MoviesWorld/MoviesWorld';


import Error from './components/SharedComp/Error';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          {/* <Route path="/birthday" exact component={() => <BirthdayReminder />} /> */}
          <Route exact path="/birthday">  <BirthdayReminder /> </Route>
          <Route path="/github" exact component={() => <GithubUsers />} />
          <Route path="/subscribe" exact component={() => <SubscriptionList />} />
          <Route path="/calci" exact component={() => <NumberCruncher />} />
          <Route path="/movies" exact component={() => <MoviesWorld />} />
          <Route path='*' ><Error /></Route>
        </Switch>
        {/* <Footer /> */}
      </Router>


    </div>
  );
}

export default App;
