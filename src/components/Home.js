import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, BrowserRouter as Router } from "react-router-dom";

import { getDataFromLocal } from "../actions";
import { NavBar, Notification, Spinner, Footer } from "./common";
import {
  Profile,
  SignUpForm,
  LoginForm,
  Search,
  Requests,
  Intro
} from "./screens";

class Home extends React.Component {
  componentDidMount() {
    this.props.getDataFromLocal();
  }
  render() {
    const { userData, authorized } = this.props.store;
    const urlName = "/" + userData.name.toLowerCase().replace(/ /g, "+");
    const urlPrefix = "/" + authorized + urlName;
    const { userId, name } = userData;

    return (
      <React.Fragment>
        <Router>
          <NavBar
            authorized={this.props.store.authorized}
            urlPrefix={urlPrefix}
            name={name}
          />
          <div className="content">
          <Route exact path="/" render={() => <Redirect to="/intro" />} />
          <Route path="/intro" component={Intro} />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignUpForm} />
          {authorized === "manager" ? (
            <Route path={urlPrefix + "/requests"} component={Requests} />
          ) : (
            <Route
              path={urlPrefix + "/profile"}
              render={() => <Profile userId={userId} />}
            />
          )}
          <Route path={urlPrefix + "/view"} component={Profile} />
          <Route exact path={urlPrefix + "/search"} component={Search} />
          <Route path={urlPrefix + "/search/back"} render={() => <Search back/>} />
          <Route path="/forgot" component={Intro} />
          </div>
        </Router>
        <Notification />
        <Spinner />
        <Footer />
      </React.Fragment>
    );
  }
}
function mapStatetoProps(state) {
  return {
    store: state.user
  };
}

export default connect(
  mapStatetoProps,
  { getDataFromLocal }
)(Home);
