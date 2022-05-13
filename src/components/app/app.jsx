import { LoginPage } from "../login-page/login-page";
import { ListPage } from "../list/list";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./app.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <a className="app-link" href="/login">
          Вход
        </a>
        <a className="app-link" href="/">
          Страница
        </a>
      </header>
      <main className="main">
        <Router>
          <Switch>
            <Route exact path="/">
              <ListPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
