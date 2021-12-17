import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Solo from "./Solo";

function App() {
  return (
    <Router>
      <h1>Hello World</h1>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/solo">
          <Solo />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
