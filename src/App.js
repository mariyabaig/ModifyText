import "./App.css";
import Navbar from "./components/Navbar";
import Text from "./components/Text";
import About from "./components/About";
import Contact from "./components/Contact";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
       

        <div>
        <Route exact path="/contact">
              <div className="container my-4">
              <Contact/>
              </div>
            </Route>
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>

            <Route exact path="/">
              <div className="container my-4">
                <Text heading="Enter your text here" /> 
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
