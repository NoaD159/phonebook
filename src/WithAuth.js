import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const WithAuth = (WrappedComponent) => {
  const AuthHOC = (props) => {
    if (!props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    return <WrappedComponent {...props} />;
  };

  const mapStateToProps = (state) => ({
    isAuthenticated: state.authentication.isAuthenticated,
  });

  return connect(mapStateToProps)(AuthHOC);
};

export default WithAuth;
