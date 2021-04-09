import logo from "./logo.svg";
import "./App.css";
import Hearder from "./components/Header";
import Carousel from "./components/Carousel";
import Productlist from "./components/Produclist";
import Promotion from "./components/Promotion";
function App() {
  return (
    <div>
      <Hearder />
      <Carousel />
      <Productlist />
      <Promotion />
    </div>
  );
}

export default App;
