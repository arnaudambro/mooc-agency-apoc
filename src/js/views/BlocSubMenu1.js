import React from 'react';
import ButtonWithArrow from './UI/ButtonWithArrow';
import BlocDescription from './BlocDescription';

//import PropTypes from 'prop-types';

export default class BlocSubMenu1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(changeMarketToShow) {
    this.props.action(changeMarketToShow);
  }

  render() {
    const { description, buttons } = this.props.context;

    return (
      <div className={`bloc-sub-menu-1 bloc`}>
        {!this.props.noDescription && (
          <BlocDescription
            classes="bloc-sub-menu-1__description"
            description={description}
          />
        )}
        <div className="bloc-sub-menu-1__buttons">
          {buttons.map((button, i) => {
            return (
              <ButtonWithArrow
                key={button.action}
                button={button}
                click={this.handleButtonClick}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

BlocSubMenu1.propTypes = {};