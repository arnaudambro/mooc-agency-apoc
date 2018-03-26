import React from 'react';
import BlocDragAndDropType1 from '../views/BlocDragAndDropType1';
import BlocDescription from '../views/BlocDescription';
import BlocDivider from '../views/BlocDivider';
import BlocVideo from '../views/BlocVideo';
import BlocUpAndDownType1 from '../views/BlocUpAndDownType1';
import PropTypes from 'prop-types';
// import { GlobalInfosContext } from '../model/react-context/GlobalInfosProvider';
// import BlocHeader from '../views/BlocHeader';
//import ButtonPrimary from '../views/UI/ButtonPrimary';

export default class Step7_01 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNextModule: 0
    };

    this.handleShowNextModule = this.handleShowNextModule.bind(this);
  }

  handleShowNextModule() {
    this.setState({ showNextModule: this.state.showNextModule + 1 });
    if (this.state.showNextModule > 2) {
      this.props.endOfModules(true);
    }
  }

  render() {
    const step7 = this.props.context.module_04;

    return (
      <React.Fragment>
        <BlocDescription description={step7.module_04_01.description} padding />
        <BlocDragAndDropType1
          context={step7.module_04_02}
          gameIsFinished={this.handleShowNextModule}
        />
        {this.state.showNextModule > 0 && <BlocDivider />}
        {this.state.showNextModule > 0 && (
          <BlocDragAndDropType1
            context={step7.module_04_03}
            gameIsFinished={this.handleShowNextModule}
          />
        )}
        {this.state.showNextModule > 1 && <BlocDivider />}
        {this.state.showNextModule > 1 && (
          <React.Fragment>
            <BlocVideo context={step7.module_04_04} />
            <BlocUpAndDownType1
              context={step7.module_04_05}
              gameIsFinished={this.handleShowNextModule}
            />
          </React.Fragment>
        )}
        {this.state.showNextModule > 2 && (
          <BlocUpAndDownType1
            context={step7.module_04_06}
            gameIsFinished={this.handleShowNextModule}
            noHeader
          />
        )}
      </React.Fragment>
    );
  }
}

Step7_01.propTypes = {
  context: PropTypes.object.isRequired,
  endOfModules: PropTypes.func
};
