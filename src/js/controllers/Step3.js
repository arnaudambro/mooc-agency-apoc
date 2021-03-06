/******* TODO *********/

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { GlobalInfosContext } from '../model/react-context/GlobalInfosProvider';
import Fade from '../transitions/Fade';
import BlocStep from '../views/BlocStep';
import BlocStepTopContent from '../views/BlocStepTopContent';
import BlocTextToFill from '../views/BlocTextToFill';
import BlocText from '../views/BlocText';
import BlocLink from '../views/BlocLink';
import BlocQuiz from '../views/BlocQuiz';
import BlocDivider from '../views/BlocDivider';
import BlocSpacer from '../views/BlocSpacer';
import BlocSubMenu1 from '../views/BlocSubMenu1';
import ButtonPrimary from '../views/UI/ButtonPrimary';

class Step3 extends React.Component {
  state = {
    show_01: false,
    show_02: false,
    show_03: false,
    show_04: false,
    showQuiz: false,
    showSynthese: false,
    reset: false,
  };

  componentDidMount() {
    this.props.tellAppIAmIntro(false);
  }

  changeMarketToShow = marketToShow => {
    const stateCopy = { ...this.state };

    Object.keys(stateCopy).forEach(stateAction => {
      stateAction === marketToShow ? (stateCopy[`${stateAction}`] = true) : (stateCopy[`${stateAction}`] = false);
    });

    this.setState({ ...stateCopy, reset: true });
  };

  handleShowSynthese = bool => {
    this.setState({
      showSynthese: true,
      reset: false,
    });
  };

  handleShowQuiz = e => {
    Object.keys(this.state).forEach(key => {
      this.setState({ [key]: false });
    });
    this.setState({ showQuiz: true });
  };

  render() {
    const {
      show_01,
      show_02,
      show_03,
      show_04,
      showQuiz,
      showSynthese,
      /*showNextModule*/
    } = this.state;

    /*const mainThread = !show_01 && !show_02 && !show_03 && !show_04;*/

    const isStep3 = this.props.match.path === '/step3';

    /*const stepInStep0 = showNextModule > 0;*/
    /*const stepInStep1 = showNextModule > 1;
    const stepInStep3 = showNextModule > 2;*/

    return (
      <Fade classProps="step step3" in={isStep3}>
        <GlobalInfosContext.Consumer>
          {context => {
            const step3 = context.state.step3;
            if (!showQuiz) {
              return (
                <React.Fragment>
                  <BlocStep step={step3.linkStep} />
                  <BlocStepTopContent in={isStep3} step={step3} scrollIntoView={isStep3} />
                  <BlocSubMenu1
                    {...step3.module_02}
                    in={isStep3}
                    action={this.changeMarketToShow}
                    reset={this.state.reset}
                  />
                  <BlocSpacer />
                  {show_01 && <BlocLink in={show_01} scrollIntoView={show_01} {...step3.module_03.module_03_01} />}
                  {show_01 && (
                    <BlocTextToFill
                      in={show_01}
                      {...step3.module_03.module_03_02}
                      gameIsFinished={this.handleShowSynthese}
                      reset={this.state.reset}
                    />
                  )}
                  {show_02 && <BlocLink in={show_02} scrollIntoView={show_02} {...step3.module_04.module_04_01} />}
                  {show_02 && (
                    <BlocTextToFill
                      in={show_02}
                      scrollIntoView={show_01}
                      {...step3.module_04.module_04_02}
                      gameIsFinished={this.handleShowSynthese}
                      reset={this.state.reset}
                    />
                  )}
                  {show_03 && <BlocLink in={show_03} scrollIntoView={show_03} {...step3.module_05.module_05_01} />}
                  {show_03 && (
                    <BlocTextToFill
                      in={show_03}
                      {...step3.module_05.module_05_02}
                      gameIsFinished={this.handleShowSynthese}
                      reset={this.state.reset}
                    />
                  )}
                  {show_04 && <BlocLink in={show_04} scrollIntoView={show_04} {...step3.module_06.module_06_01} />}
                  {show_04 && (
                    <BlocTextToFill
                      in={show_04}
                      {...step3.module_06.module_06_02}
                      gameIsFinished={this.handleShowSynthese}
                      reset={this.state.reset}
                    />
                  )}
                  <div className="step3__synthese step__synthese bloc">
                    {(showSynthese || show_01 || show_02 || show_03 || show_04) && (
                      <BlocSubMenu1
                        {...step3.module_02}
                        in={showSynthese || show_01 || show_02 || show_03 || show_04}
                        // scrollIntoView={showSynthese}
                        action={this.changeMarketToShow}
                        noDescription
                      />
                    )}
                    <Link to="/step4" className="first button-link">
                      <ButtonPrimary minWidth name={step3.module_07.button_1} enableClick />
                    </Link>
                    <Link to="#" className="button-link">
                      <ButtonPrimary minWidth name={step3.module_07.button_2} />
                    </Link>
                  </div>
                </React.Fragment>
              );
            } else {
              return (
                <React.Fragment>
                  <BlocStep step={step3.linkStep} />
                  <BlocSpacer />
                  <BlocText in {...step3.module_12} scrollIntoView />
                  <BlocDivider in />
                  <BlocQuiz in {...step3.module_13} />
                </React.Fragment>
              );
            }
          }}
        </GlobalInfosContext.Consumer>
      </Fade>
    );
  }
}

Step3.propTypes = {
  in: PropTypes.bool,
};

Step3.defaultProps = {
  in: false,
};

export default Step3;
