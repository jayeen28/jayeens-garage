import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Error from './Components/Error/Error';
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/services'>
            <Services></Services>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
          <Route path='*'>
            <Error></Error>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
