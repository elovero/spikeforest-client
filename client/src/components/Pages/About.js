import React, { Component } from 'react';
import LeftMenu from '../LeftMenu';
import CopyHeader from '../CopyHeader/CopyHeader';
import Container from 'react-bootstrap/Container';

class About extends Component {
  render() {
    return (
      <div className="about__body">
        <Container>
          <CopyHeader headerCopy={this.props.header} />
          <LeftMenu />
        </Container>
      </div>
    );
  }
}
export default About;
