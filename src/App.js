import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './sections/Home/Home';

function App() {
  return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
  );
}

export default App;
