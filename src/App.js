import "./App.css";

// Components
import Homepage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";

// Router
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact={true} path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
