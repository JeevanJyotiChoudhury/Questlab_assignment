import "./App.css";
import BottomNav from "./Components/BottomNav";
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";
import UserDetails from "./Components/UserDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <UserDetails />
      <BottomNav/>
    </div>
  );
}

export default App;
