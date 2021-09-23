import './App.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import ContactUs from './Components/Contactus';
import AboutUs from './Components/Aboutus';
import BaseComponent from './Components/BaseComponent'

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter >
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <BaseComponent />
        <Switch>
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
