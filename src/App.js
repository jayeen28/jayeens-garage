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
import { useEffect, useState } from 'react';

function App() {
  const [services, setservices] = useState([]);
  //Load data of services
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Jayeen29/jayeens-garage-api/main/jayeens-garage-api.json')
      .then(res => res.json())
      .then(data => setservices(data))
  }, [])
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home services={services.slice(0, 4)}></Home>
          </Route>
          <Route path='/home'>
            <Home services={services.slice(0, 4)}></Home>
          </Route>
          <Route path='/services'>
            <Services services={services}></Services>
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
