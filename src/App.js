import Login from "./components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Table from "./components/Table_Comp/Table";
import TodoApp from "./components/List_comp/TodoApp";
import Calculator from "./components/calculator_comp/Calculator";
import { isMobile } from "react-device-detect";

function App() {
  if (isMobile) {
    return <div> This content is unavailable on mobile</div>;
  }
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/Table">
            <Table />
          </Route>
          <Route path="/List">
            <TodoApp />
          </Route>
          <Route path="/Calculate">
            <Calculator />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
