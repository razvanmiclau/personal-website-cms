import React, { PureComponent } from 'react';
import { Link } from 'react-router';

export default class Home extends PureComponent {
  render() {
    return(
      <div id="wrapper" className="divided">
        {this.props.children}
      </div>
    )
  }
};
