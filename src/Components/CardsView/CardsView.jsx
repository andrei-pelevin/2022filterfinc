import React from 'react';
import ShopCard from './ShopCard'
import PropTypes from 'prop-types';

const CardsView = ({cards}) => {  

    return (
        <div className='CardsView d-flex flex-wrap justify-content-between'>
            {cards.map((card, i) => {
                return (
                    <ShopCard key={i} card={card} />
                )
            })}
        </div>
        
    )
}

CardsView.propTypes = {
    cards: PropTypes.array
  };

export default CardsView;