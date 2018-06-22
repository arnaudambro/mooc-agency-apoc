import React from 'react';
import PropTypes from 'prop-types';

import BlocHeader from '../views/BlocHeader';
import BlocDescription from './BlocDescription';
import ButtonPrimary from './UI/ButtonPrimary';
import PopupBlue from './UI/PopupBlue';
import Fade from '../transitions/Fade';

import arrowDown from '../../assets/img/icons/arrow-down.png';

class BlocEnSavoirPlusType3 extends React.Component {
  state = {
    hideCard: true,
    cardNumberShown: 1,
  };

  cardNumberShown = card => {
    this.setState({ cardNumberShown: card.index, hideCard: false });
  };

  hideCards = card => {
    this.setState({ cardNumberShown: card.index, hideCard: true });
  };

  render = () => {
    const {
      modulType,
      noChapter,
      cards,
      duration,
      grid,
      chapter,
      title,
      firstDescription,
      scrollIntoView,
    } = this.props;

    const { hideCard, cardNumberShown } = this.state;

    return (
      <Fade
        in={this.props.in}
        classProps={`bloc bloc-en-savoir-plus bloc-en-savoir-plus-type-3`}
        scrollIntoView={scrollIntoView}
        margins={this.props.margins}>
        {!noChapter && <BlocHeader type="horloge" duration={duration} name={chapter} />}
        <span className="bloc__name">{title}</span>
        <BlocDescription modulType={modulType} classProps="bloc__first-description" description={firstDescription} />
        <div
          className="bloc-en-savoir-plus-type-3__cards game"
          style={{
            gridTemplateColumns: `repeat(${grid.columns}, 1fr)`,
          }}>
          <React.Fragment>
            {cards.map((card, index) => {
              const hover = cardNumberShown === card.startPosition && !hideCard;
              return (
                <div
                  key={index}
                  className="button-groupe"
                  onMouseEnter={() => this.cardNumberShown(card)}
                  onMouseLeave={() => this.hideCards(card)}
                  style={{
                    gridRow: card.position.row,
                    gridColumn: card.position.column,
                  }}>
                  <ButtonPrimary color={hover ? card.hoverColor : card.color} name={card.cardTitle} />
                  {card.arrowFollowing && (
                    <div className="arrow-following" style={{ backgroundImage: `url(${arrowDown})` }} />
                  )}
                </div>
              );
            })}
          </React.Fragment>
          <PopupBlue
            classProps="bloc-en-savoir-plus-type-3__cards--to-show"
            hidePopup={hideCard}
            styleProps={{
              gridRow: `1 / ${grid.rows}`,
              gridColumn: `2 / ${grid.columns + 1}`,
            }}>
            <span className="card-title">{!hideCard && cards[cardNumberShown - 1].cardTitle}</span>
            <span className="card-subtitle">{!hideCard && cards[cardNumberShown - 1].cardSubTitle}</span>
            {!hideCard &&
              (cards[cardNumberShown - 1].cardContent.__html ? (
                <p className="card-content" dangerouslySetInnerHTML={cards[cardNumberShown - 1].cardContent} />
              ) : (
                <p className="card-content">{cards[cardNumberShown - 1].cardContent}</p>
              ))}
          </PopupBlue>
        </div>
      </Fade>
    );
  };
}

BlocEnSavoirPlusType3.propTypes = {
  in: PropTypes.bool,

  /***************** DATA ******************/

  modulType: PropTypes.string.isRequired,
  noChapter: PropTypes.bool,
  chapter: PropTypes.string.isRequired,
  duration: PropTypes.number,
  title: PropTypes.string.isRequired,
  grid: PropTypes.shape({
    rows: PropTypes.number.isRequired,
    columns: PropTypes.number.isRequired,
  }),
  firstDescription: PropTypes.shape({ __html: PropTypes.string.isRequired }),
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      hoverColor: PropTypes.string.isRequired,
      position: PropTypes.shape({
        row: PropTypes.number.isRequired,
        column: PropTypes.number.isRequired,
      }).isRequired,
      arrowFollowing: PropTypes.bool.isRequired,
      cardTitle: PropTypes.string.isRequired,
      cardContent: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.shape({ __html: PropTypes.string.isRequired }),
      ]).isRequired,
      cardSubTitle: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

BlocEnSavoirPlusType3.defaultProps = {
  in: false,

  /***************** DATA ******************/
  firstDescription: {
    __html: ``,
  },
  noChapter: false,
  duration: 0,
};

export default BlocEnSavoirPlusType3;