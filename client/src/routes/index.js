import React, { Component } from 'react';
import { Route, Switch } from 'react-router';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

// import components
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import Home from '../components/Pages/Home';
import About from '../components/Pages/About';
import Recordings from '../components/Pages/Recordings';
import Studies from '../components/Pages/Studies';
import Algos from '../components/Pages/Algos';
import SinglePairing from '../components/PairingBits/SinglePairing';
import headerCopy from '../components/CopyHeader/header-copy';

class Routes extends Component {
  async componentDidMount() {
    this.props.fetchStudies();
    this.props.fetchSorters();
    this.props.fetchRecordings();
    this.props.fetchUnits();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Home {...this.props} header={headerCopy.home} />}
          />
          <Route
            path="/algos"
            render={props => (
              <Algos {...this.props} header={headerCopy.algos} />
            )}
          />
          <Route
            path="/about"
            render={props => (
              <About {...this.props} header={headerCopy.about} />
            )}
          />
          <Route
            path="/recordings"
            render={props => (
              <Recordings {...this.props} header={headerCopy.recordings} />
            )}
          />
          <Route
            path="/studies"
            render={props => (
              <Studies {...this.props} header={headerCopy.studies} />
            )}
          />
          <Route
            path="/pairing/magland-synth-noise10-K10-C4/MountainSort4-thr3"
            render={props => <SinglePairing {...this.props} />}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    recordings: state.recordings,
    studies: state.studies,
    sorters: state.sorters,
    units: state.units,
    loading: state.loading,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators(actionCreators, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes);
