/******* TODO *********/

import React from 'react';
/*import PropTypes from 'prop-types';*/

import { GlobalInfosContext } from '../model/react-context/GlobalInfosProvider';
import BlocStepTopContent from '../views/BlocStepTopContent';
import Fade from '../transitions/Fade';

class Step4 extends React.Component {
  state = {};

  render() {
    return (
      <Fade classProps={``}>
        <GlobalInfosContext.Consumer>
          {context => {
            const step4 = context.state.step4;
            return (
              <React.Fragment>
                <BlocStepTopContent step={step4} videoInIframe />
                {/*<iframe
                                  title="step4-iframe-1"
                                  style={{
                                    display: 'block',
                                    margin: 'auto',
                                    marginBottom: ' 0px',
                                    border: 'none',
                                    marginLeft: '0px'
                                  }}
                                  width="709"
                                  height="5000"
                                  src={`${
                                    process.env.REACT_APP_DAVIS_URL
                                  }APOCamundi/chapFolder/etape5/etape5/index.html`}
                                  id="frame1"
                                  align="middle"
                                  scrolling="no"
                                />*/}
              </React.Fragment>
            );
          }}
        </GlobalInfosContext.Consumer>
      </Fade>
    );
  }
}

Step4.propTypes = {};

Step4.defaultProps = {};

export default Step4;
