import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import MyListPage from './components/pages/MyListPage';
import MyHomePage from './components/pages/MyHomePage';




function App() {
  return (
    <Router>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <MyHomePage></MyHomePage>
      </Route>
      <Route path="/new">
        hi
        <MyListPage></MyListPage>
      </Route>
    </Switch>
    <Footer />
  </Router>
  );
}

export default App;
