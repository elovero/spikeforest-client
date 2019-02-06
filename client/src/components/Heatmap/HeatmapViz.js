import React, { Component } from 'react';
import HeatmapRow from './HeatmapRow';
import { isEmpty } from '../../utils';
import { Scrollama, Step } from 'react-scrollama';

class HeatmapViz extends Component {
  constructor(props) {
    super(props);
    this.state = { vizData: [], data: 0 };
  }

  componentDidMount() {
    this.buildVizData(this.props.filteredData);
  }

  componentDidUpdate(prevProps) {
    if (this.props.builtData !== prevProps.builtData) {
      this.buildVizData(this.props.filteredData);
    }
  }

  buildVizData(data) {
    if (data) {
      let vizData = data.map(study => {
        let values = Object.values(study)[0];
        return values.sort((a, b) => {
          let textA = a.sorter.toUpperCase();
          let textB = b.sorter.toUpperCase();
          return textA < textB ? -1 : textA > textB ? 1 : 0;
        });
        // TODO: Allow for other sorting
      });
      let newViz = vizData.sort((a, b) => {
        let textA = a[0].study.toUpperCase();
        let textB = b[0].study.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });
      this.setState({ vizData: newViz });
    }
  }

  onStepEnter({ element, data, direction }) {
    this.setState({ data });
  }

  render() {
    const loading = isEmpty(this.state.vizData);
    return (
      <div>
        {loading ? (
          <h4>...</h4>
        ) : (
          <div className="heatmap__column">
            <p>data: {this.state.data}</p>
            <Scrollama onStepEnter={this.onStepEnter}>
              {this.state.vizData.map((data, i) => (
                <Step data={i}>
                  <HeatmapRow
                    {...this.props}
                    vizDatum={data}
                    key={`hmrow${i}`}
                    index={i}
                    format={this.props.format}
                    sorters={this.props.sorters.sort()}
                  />
                </Step>
              ))}
            </Scrollama>
          </div>
        )}
      </div>
    );
  }
}

export default HeatmapViz;

// class Graphic extends PureComponent {
//   state = {
//     data: 0,
//   };

//   onStepEnter = ({ element, data, direction }) => this.setState({ data });

//   render() {
//     const { data } = this.state;

//     return (
//       <div>
//         <p>data: {data}</p>
//         <Scrollama onStepEnter={this.onStepEnter}>
//           <Step data={1}>
//             step 1
//           </Step>
//           <Step data={2}>
//             step 2
//           </Step>
//         </Scrollama>
//       </div>
//     );
//   }
// }
