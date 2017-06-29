import React, { PureComponent } from 'react';
import { Link, hashHistory } from 'react-router';
import { Field, reduxForm } from 'redux-form/immutable';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActionCreators from '../actions/auth';

class Login extends PureComponent {
  login() {
    this.props.authActions.login(this.props.location.query.next || '/admin')
  }

  render() {
    return(
      <form>
        <div className="field">
          <label htmlFor="email">Email Address</label>
          <Field
            name="email"
            type="text"
            className="form-control"
            component="input"
          placeholder="email" />
        </div>

        <div className="field">
          <label htmlFor="password">Password</label>
          <Field
            name="password"
            type="password"
            className="form-control"
            component="input"
          placeholder="password" />
        </div>
        <ul className="actions">
          <li>
            <button type="button" onClick={() => this.login()}>
              Login
            </button>
          </li>
        </ul>
      </form>
    )

  }
};

function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators(authActionCreators, dispatch),
  }
}

export default reduxForm({ form: 'login' })(connect(null, mapDispatchToProps)(Login));
