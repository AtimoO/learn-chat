import { LoginPage } from "../login-page/login-page";
import { BrowserRouter as Router, Route } from "react-router-dom";

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
          <Route path="/login">
            <LoginPage />
          </Route>
        </Router>
      </main>
    </div>
  );
}

export default App;
