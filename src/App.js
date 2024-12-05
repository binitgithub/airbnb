import AirbnbComponent from "./components/AirbnbComponent";
import CategoryNav from "./components/CategoryNav";
import Navbar from "./components/Navbar ";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div>
     <Navbar/>
     <SearchBar/>
     <CategoryNav/>
     <AirbnbComponent/>
    </div>
  );
}

export default App;
