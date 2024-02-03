import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      
    </div>
    </Router>
    
  );
}

export default App; //so that we can use it in other files
