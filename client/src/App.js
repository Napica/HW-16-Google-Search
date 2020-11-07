import { useEffect } from "react";
import API from "./utils/API.js";
import Saved from "./pages/SavedPage";
import Search from "./pages/SearchPage";
import Home from "./pages/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
          </Switch>
          <Footer />
        </>
      </Router>
    </div>
  );
}

export default App;
