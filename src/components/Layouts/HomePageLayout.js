import { Link } from 'react-router-dom';
import React from 'react';
import '../../App.css';
import RelPowerLightLayout from './RelPowerLightLayout';
import RelPowerTimeLayout from './RelPowerTimeLayout';

const HomePageLayout = () => {
  return (
    //todo put this somewhere else
    <div className="Homepage">
      <div className="Homepage-box">
        <h2>Home</h2>
        <h3>Relative Power Analysis</h3>
      {/*< RelPowerLightLayout />*/}
        <Link className="Homepage-link" to="/lightdark">
          Light/Dark Binned
        </Link>
        <br></br>
        {/*< RelPowerTimeLayout/>*/}
        <Link className="Homepage-link" to="/time">
          Unbinned (will be time binned)
        </Link>
      </div>
    </div>
  );
};

export default HomePageLayout;
