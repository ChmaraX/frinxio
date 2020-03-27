import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Company from "./about/Company";
import ContactUs from "./about/ContactUs";
import PrivacyPolicy from "./about/PrivacyPolicy";
import { AuthProvider } from "./auth/AuthProvider";
import ForgotPassword from "./auth/ForgotPassword";
import Login from "./auth/Login";
import PrivateRoute from "./auth/PrivateRoute";
import Profile from "./auth/Profile";
import Register from "./auth/Register";
import Careers from "./careers/Careers";
import Header from "./common/Header";
import Homepage from "./homepage/Homepage";
import "./less/global.less";

function App() {
  return (
    <AuthProvider>
      <HashRouter basename="/">
        <Header />
        <Switch>
          <PrivateRoute path="/profile" component={Profile} />
          <Route exact path="/" component={Homepage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/careers" component={Careers} />
          <Route path="/company" component={Company} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/reset-password" component={ForgotPassword} />
        </Switch>
      </HashRouter>
    </AuthProvider>
  );
}
export default App;
