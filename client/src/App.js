import { useEffect } from "react";
import API from "./utils/API.js";
import Saved from "./pages/SavedPage";
import Search from "./pages/SearchPage";
import Home from "./pages/HomePage"
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    test();
  }, []);

  function test() {
    API.test()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <div className="App">
      <Router>
        <>
          <Header />
          <Navbar />
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
          </div>
        </>
      </Router>
    </div>
  );
}

export default App;
