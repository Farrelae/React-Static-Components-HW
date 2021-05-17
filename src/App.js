import Analysis from "./components/Analysis"
import Nav from "./components/Nav"
import Rating from "./components/Rating"
import Reviews from "./components/Reviews"
import Visitors from "./components/Visitors"
import './styles.css';

function App() {
  return (
    <div>
     <Analysis/>
     <Nav/>
     <Rating/>
     <Reviews/>
     <Visitors/>
    </div>
  );
}

export default App;
