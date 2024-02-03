import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import Create from './Create';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </div>
      
    </div>
    </Router>
    
  );
}

export default App; //so that we can use it in other files
