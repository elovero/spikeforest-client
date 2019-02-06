import React, { Component } from 'react';
import HeatmapViz from './HeatmapViz';
import { isEmpty } from '../../utils';
import { ContinuousColorLegend } from 'react-vis';

// Components
import Preloader from '../Preloader';
import StudySorterSummary from '../StudySorterSummary';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';

// Stylin'
import './heatmap.css';

class HeatmapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // TODO: Change this to accuracy filtered data
      builtData: [],
      accuracy: 0.8,
      snrMin: 5,
    };
  }

  componentDidMount() {
    if (this.props.unitsMap.length) {
      this.filterAccuracyMap();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.unitsMap !== prevProps.unitsMap ||
      this.state.accuracy !== prevState.accuracy ||
      this.state.snrMin !== prevState.snrMin
    ) {
      this.filterAccuracyMap();
    }
  }

  filterData() {
    if (this.props.format === 'count') {
      this.filterAccuracyMap();
    } else {
      this.filterSNRMap();
    }
  }

  filterAccuracy(sorterArray) {
    let newArr = sorterArray.map(sorter => {
      let above = sorter.accuracies.filter(accu => {
        return accu >= this.state.accuracy;
      });
      sorter.in_range = above.length;
      sorter.color = above.length;
      return sorter;
    });
    return newArr;
  }

  filterAccuracyMap() {
    let built = this.props.unitsMap.map(study => {
      let values = Object.values(study)[0];
      let key = Object.keys(study)[0];
      let filtered = this.filterAccuracy(values);
      return { [key]: filtered };
    });
    this.setState({ builtData: built });
  }

  filterSNR(sorterArray) {
    let newArr = sorterArray.map(sorter => {
      let accs = [];
      sorter.true_units.forEach(unit => {
        if (unit.snr > this.state.snrMin) {
          accs.push(unit.accuracy);
        }
      });
      let aboveAvg = 0;
      if (accs.length) {
        let sum = accs.reduce((a, b) => a + b);
        aboveAvg = sum / accs.length;
      }
      // This just prints the output to 2 digits
      sorter.in_range = Math.round(aboveAvg * 100) / 100;
      sorter.color = Math.round(aboveAvg * 100) / 100;
      return sorter;
    });
    return newArr;
  }

  filterSNRMap() {
    let built = this.props.unitsMap.map(study => {
      let values = Object.values(study)[0];
      let key = Object.keys(study)[0];
      let filtered = this.filterSNR(values);
      return { [key]: filtered };
    });
    this.setState({ builtData: built });
  }

  handleAccuracyChange = value => {
    if (this.props.format === 'count') {
      this.setState({
        accuracy: value,
      });
    } else {
      this.setState({
        snrMin: value,
      });
    }
  };

  render() {
    let loading = isEmpty(this.state.builtData);
    let measure =
      this.props.format === 'count' ? this.state.accuracy : this.state.snrMin;
    const legendCopy = {
      count: {
        startTitle: 'Least Units Found',
        endTitle: 'Most Units Found',
      },
      average: {
        startTitle: 'Lowest Average Accuracy',
        endTitle: 'Highest Average Accuracy',
      },
    };
    let byline =
      this.props.format === 'count'
        ? `Minimum accuracy: ${Math.round(this.state.accuracy * 100) / 100}`
        : `Minimum SNR: ${this.state.snrMin}`;
    return (
      <div>
        {loading ? (
          <Container>
            <Preloader />
          </Container>
        ) : (
          <Container>
            <Row className="slider__horizontal">
              <Col md={{ span: 6 }}>
                <p className="byline">
                  <b>{byline}</b>
                </p>
              </Col>
            </Row>
            <Row className="slider__horizontal">
              <Col md={{ span: 6 }}>
                <Slider
                  min={0}
                  max={1}
                  value={measure}
                  step={0.05}
                  orientation="horizontal"
                  onChange={this.handleAccuracyChange}
                />
              </Col>
            </Row>
            <Row>
              <div className="heatmap__legend">
                <ContinuousColorLegend
                  width={580}
                  startColor={'#fafafd'}
                  endColor={'#384ca2'}
                  startTitle={'Least Units Found'}
                  endTitle={'Most Units Found'}
                  height={20}
                />
              </div>
            </Row>
            <div className="scrollyteller__container">
              <HeatmapViz
                {...this.props}
                filteredData={this.state.builtData}
                sorters={this.props.shortSorters}
                format={this.props.format}
              />
              {this.props.selectedStudy ? (
                <StudySorterSummary {...this.props} accuracy={measure} />
              ) : (
                <div />
              )}
            </div>
          </Container>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedStudy: state.selectedStudy,
    selectedRecording: state.selectedRecording,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeatmapContainer);
