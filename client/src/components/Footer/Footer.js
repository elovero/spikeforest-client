import React, { Component } from 'react';
import './footer.css';
import github from './github.svg';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div class="outro">
          <p class="footer__description">
            SpikeForest is a website and open source computing framework for
            evaluating and comparing spike-sorting algorithms for
            neurophysiology data analysis.
          </p>
          <div class="footer__interwebs">
            <div class="interwebs__outer">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/flatironinstitute"
                class="github-logo"
              >
                <img alt="spikeforest logo" src={github} height="24" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/flatironinstitute"
                class="github-logo"
              >
                <img alt="spikeforest logo" src={github} height="24" />
              </a>
            </div>
          </div>
        </div>

        <ul class="footer__links x-small">
          <li class="x-small">
            <a href="/about">About</a>
          </li>
          <li class="x-small">
            <a href="https://simonsfoundation.org">Simons Foundation</a>
          </li>
          <li class="x-small">
            <a href="https://flatironinstitute.org">Flatiron Institute</a>
          </li>
          <li class="x-small">
            <a href="https://github.com/flatironinstitute/spikeforest2">
              SpikeForest Analysis Framework
            </a>
          </li>
          <li class="x-small">
            <a mailto="elovero@flatironinstitute.org">Contact us</a>
          </li>
        </ul>
        <p class="footer__location xx-small tk-atlas">
          SpikeForest is made with 🔬 in NYC
          <span
            role="img"
            aria-label="statue of liberty"
            className="footer__emoji"
          >
            🗽
          </span>
        </p>
      </footer>
    );
  }
}
export default Footer;
