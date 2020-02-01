import React from "react";
// import { BrowserRouter, Route } from "react-router-dom";
//Using Router instead of BrowserRouter so we could maintain our own history
import { Router, Route, Switch } from "react-router-dom";
import StreamCreate from "../components/streams/StreamCreate";
import StreamDelete from "../components/streams/StreamDelete";
import StreamEdit from "../components/streams/StreamEdit";
import StreamList from "../components/streams/StreamList";
import StreamShow from "../components/streams/StreamShow";
import Header from "./Header";
import history from "../history";

const App = () => {
  return (
    <div>
      {/* <BrowserRouter history={history}> */}
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/:id" exact component={StreamShow} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
