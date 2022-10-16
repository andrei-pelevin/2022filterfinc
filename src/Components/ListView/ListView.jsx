import React from 'react';
import ShopItem from './ShopItem'
import PropTypes from 'prop-types';

const ListView = ({items}) => {
    return (
        <div className='ListView'>
            
            {items.map((item, i) => {
                return (
                     <ShopItem item={item} key={i}/> 
                     )
            })}
           
        </div>
    )
}

ListView.propTypes = {
    cards: PropTypes.array
  };

export default ListView;