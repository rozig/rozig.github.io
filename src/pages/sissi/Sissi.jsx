import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faCloudDownloadAlt
} from '@fortawesome/free-solid-svg-icons';
// import IceBearSad from './../../assets/icebear-sad.png';
import iceBearHeart from './../../assets/icebear-heart.png';
import iceBearCrying from './../../assets/icebear-crying.png';
import iceBearFacePalm from './../../assets/icebear-facepalm.png';
import iceBearFlex from './../../assets/icebear-flex.png';
import iceBearDisapproves from './../../assets/icebear-disapproves.png';
import iceBearLoves from './../../assets/icebear-loves.png';
import iceBearHoldingHeart from './../../assets/icebear-holding-heart.png';
import iceBearPaw from './../../assets/icebear-paw.png';
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
        {/*<div className="icebear-dialog">
          Ice bear is feeling very sorry for not doing what he supposed to do.
        </div>
        <img className="icebear-img sad" src={IceBearSad} />
        <p className="icebear-pg">Forgive me Sissi :'(</p>*/}
        <div className="icebear-letter">
          <div className="letter-head">Dear love,</div>
          <div className="letter-content">
            I'm truly sorry for my senseless actions. I just want to apologize through this page and want you to know that how much you mean to me and how much I love you <img className="icebear-emoji" src={iceBearHeart} />. Right now, I'm feeling really bad for hurting your feelings when you showed how much you trust me and love me. I, in the other side, talking about things I was not supposed to, making actions I shouldn't which makes you angry and not being able to help you in your tough times <img className="icebear-emoji" src={iceBearCrying} />. As you said I'm really senseless one, like a frozen potato who doesn't even know to figure out how you're feeling, what I supposed to do to make you calm <img className="icebear-emoji" src={iceBearFacePalm} />. But I also want you to know that I'm still trying my best to attract your attention, love, soul, pretty much everything. I always want to help you with anything I can, if it is something I can't I want to give it a try <img className="icebear-emoji" src={iceBearFlex} />. I will never want to see you crying, hurt, tired or sad <img className="icebear-emoji" src={iceBearDisapproves} />. But I will always want to see you being happy, smiling and loved <img className="icebear-emoji" src={iceBearLoves} />. Last but not least, you and I are already living together, loving each other in my head and I want to make it happen <img className="icebear-emoji" src={iceBearHoldingHeart} />.
          </div>
          <div className="letter-foot">
            Love,<br />
            Icebear <img className="icebear-emoji" src={iceBearPaw} />
          </div>
        </div>
      </div>
    );
  }
};

export default Sissi;
