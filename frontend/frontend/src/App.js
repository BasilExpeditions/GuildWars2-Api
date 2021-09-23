import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ContactUs from './Components/Contactus';
import AboutUs from './Components/Aboutus';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Guild Wars 2 Assistant
        </p>
        <a
          className="App-link"
          href="https://www.guildwars2.com/en-gb/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Guild Wars 2
        </a>
        <BrowserRouter >
          <Switch>
            <Route path="/contact">
              <ContactUs />
            </Route>
            <Route path="/about">
              <AboutUs />
            </Route>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
