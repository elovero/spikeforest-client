import React, { Component } from 'react';
import CopyHeader from '../CopyHeader/CopyHeader';
import Preloader from '../Preloader';
import HeatmapsContainer from '../Heatmap/HeatmapsContainer';
import { flattenUnits, mapUnitsBySorterStudy } from '../../dataHandlers';
import { isEmpty } from '../../utils';
import Container from 'react-bootstrap/Container';

import './pages.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flatUnits: {},
      unitsMap: {},
    };
  }

  // TODO: Move flatten units and map units to redux?
  componentDidMount() {
    if (this.props.units && this.props.studies) {
      let flatUnits = flattenUnits(this.props.units, this.props.studies);
      this.setState({ flatUnits: flatUnits });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.units !== prevProps.units ||
      this.props.studies !== prevProps.studies
    ) {
      if (this.props.units && this.props.studies) {
        let flatUnits = flattenUnits(this.props.units, this.props.studies);
        this.setState({ flatUnits: flatUnits });
      }
    }
    if (this.state.flatUnits !== prevState.flatUnits) {
      this.mapUnits();
    }
  }

  async mapUnits() {
    let unitsMap = await mapUnitsBySorterStudy(
      this.state.flatUnits,
      this.props.sorters
    );
    this.setState({ unitsMap: unitsMap });
  }

  getStudies() {
    return this.props.studies
      .map(item => item.name)
      .filter((value, index, self) => self.indexOf(value) === index);
  }

  getSorters() {
    return this.props.sorters
      .map(item => item.name)
      .filter((value, index, self) => self.indexOf(value) === index);
  }

  render() {
    let loading =
      isEmpty(this.state.flatUnits) ||
      isEmpty(this.props.studies) ||
      isEmpty(this.props.sorters);
    let sorters = this.props.sorters ? this.getSorters() : null;
    let studies = this.props.studies ? this.getStudies() : null;
    return (
      <div className="home__body">
        <Container>
          {loading ? (
            <Preloader />
          ) : (
            <Container fluid="true">
              <div className="intro">
                <p className="big">Spike Sorting Results</p>
                <div className="dividerthick" />
                <p className="subhead">
                  Spike Sorting Algorithms, compared against electrophysiology
                  datasets with groundtruth
                </p>
                <p className="byline">
                  Project of
                  <a href="https://flatironinstitute.org">Flatiron Institute</a>
                </p>
                <p className="updated">Updated on February 4, 2019</p>
                <p className="updated-sub">
                  Browse all datasets, algorithms, sorting results, and
                  comparisons, and inspect the source code used to generate
                  these data.
                </p>
              </div>
              <HeatmapsContainer
                {...this.props}
                shortStudies={studies}
                shortSorters={sorters}
                unitsMap={this.state.unitsMap}
              />
            </Container>
          )}
        </Container>
      </div>
    );
  }
}
export default Home;
