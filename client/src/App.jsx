import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import ProductListing from "./components/ProductSearch";
function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route>404 Not Found</Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
