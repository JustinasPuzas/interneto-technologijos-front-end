import { Route, Switch, Redirect } from "react-router-dom";
import React, { Component }  from 'react';
import NotesPage from "./pages/Notes";
import Welcome from "./pages/Welcome";
import MainHeader from "./components/MainHeader";
import NotePage from "./pages/NotePage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";

function App() {
  return (
      <div>
        <MainHeader />
        <main>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/welcome" />
            </Route>
            <Route path="/welcome">
              <Welcome />
            </Route>
            <Route path="/login" exact>
              <LoginPage />
            </Route>
            <Route path="/register" exact>
              <RegistrationPage />
            </Route>
            <Route path="/notes" exact>
              <NotesPage />
            </Route>
            <Route path="/note/:noteId">
              <NotePage />
            </Route>
          </Switch>
        </main>
      </div>
  );
}

export default App;

// our-domain.com/ => Component A
// our-domain.com/ => Component B
