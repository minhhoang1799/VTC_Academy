import React from 'react';
// import PropTypes from 'prop-types';
import HomeBanner from './features/HomeBanner/HomeBanner';
import './Home.scss';

Home.propTypes = {

};

function Home(props) {
  return (
    <div>
      <div className="container">
        <div className="home">
          <HomeBanner />
        </div>
      </div>
    </div>
  );
}

export default Home;