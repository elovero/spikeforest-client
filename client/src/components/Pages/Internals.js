import React, { Component } from 'react';
import LeftMenu from '../LeftMenu';
import CopyHeader from '../CopyHeader/CopyHeader';
import Container from 'react-bootstrap/Container';

import './pages.css';

class Internals extends Component {
  render() {
    return (
      <div className="home__body">
        <div className="intro">
          <p className="big">Internals</p>
          <div className="dividerthick" />
          <p className="subhead">
            Spike sorting algorithms, compared against electrophysiology
            datasets with groundtruth
          </p>
          <p className="byline">
            Project of
            <a href="https://flatironinstitute.org">Flatiron Institute</a>
          </p>
          <p className="updated">Updated on February 14, 2019</p>
          <p className="updated-sub">
            Browse all datasets, algorithms, sorting results, and comparisons,
            and inspect the source code used to generate these data. Use the
            links to the right to learn about recordings, sorters, and metric
            definitions.
          </p>
        </div>
        <div className="opener">
          <div className="prose-container">
            <p>
              Electrical recording from extracellular probes is a popular and
              affordable method to capture the simultaneous activity of many
              neurons in the brain or retina. There is a great need to quantify
              the reliability of the firing events extracted from the recordings
              by spike sorting algorithms. This SpikeForest website addresses
              this need, assessing many popular spike sorting codes via "ground
              truth" recordings, which are the gold standard in terms of
              accuracy. We host a variety of experimental paired ground truth
              recordings from the community, and also many in silico synthetic
              recordings. Each sorter is run on all recordings, and the
              resulting accuracies for the ground truth units are updated on a
              daily basis as needed. Approximate CPU/GPU run times are also
              reported.
            </p>
            <p>
              This software is open source: you can browse all datasets,
              algorithms, sorting results, and comparisons, and inspect the
              source code used to generate these data. One goal is for
              neuroscientists to best choose the spike sorter appropriate for
              their probe type and brain region.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Internals;
