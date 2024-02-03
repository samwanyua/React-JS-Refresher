import Navbar from './Components/Navbar';
import Home from './Components/Home';

function App() {
  const title = 'Welcome to the new blog'
  const likes = 50;
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
      
    </div>
  );
}

export default App; //so that we can use it in other files
