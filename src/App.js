import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import Routes from "./config/Routes";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes />
      </BrowserRouter>
    </>
  );
};

export default App;
