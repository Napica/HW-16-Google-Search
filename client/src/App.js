import { useEffect } from "react";
import API from "./utils/API.js";

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
      <h1>this is the body</h1>
    </div>
  );
}

export default App;
