import "./App.css";

// Components
import Homepage from "./pages/homepage/homepage.component";

// Router
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

const MensProductsPage = () => (
  <div>
    <h1>Mens Products</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact={true} path="/" component={Homepage} />
          <Route path="/mens" component={MensProductsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
