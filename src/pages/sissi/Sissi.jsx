import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faCloudDownloadAlt
} from '@fortawesome/free-solid-svg-icons';
import IceBearSad from './../../assets/icebear_sad.png';
import './Sissi.scss';

class Sissi extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="page-content sissi">
        <div className="icebear-dialog">
          Ice bear is feeling very sorry for not doing what he supposed to do.
        </div>
        <img className="icebear-img sad" src={IceBearSad} />
        <p className="icebear-pg">Forgive me Sissi :'(</p>
      </div>
    );
  }
};

export default Sissi;
