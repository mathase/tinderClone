import "./App.css";
import Header from "./components/header.component/header.jsx";
import TinderCards from './components/tinderCard.component/TinderCard.jsx';
import Swipebuttons from "./components/swipe.component/SwipeButtons.jsx";

function App() {
  return (
    <div className="App">
      {/* header */}
      <Header />
      {/* card */}
      <TinderCards />
      {/* swipe Buttons */}
      <Swipebuttons />
    </div>
  );
}

export default App;
