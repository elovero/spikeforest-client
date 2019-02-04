import React, { Component } from 'react';
import LeftMenu from './LeftMenu';
import CopyHeader from './CopyHeader';

class About extends Component {
  render() {
    return (
      <div>
        <LeftMenu />
        <div className="container container__body">
          <CopyHeader headerCopy={this.props.header} />
        </div>
      </div>
    );
  }
}
export default About;
