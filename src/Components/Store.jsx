import React from "react";
import { useState } from "react";
import IconSwitch from "./IconSwitch";
import ListView from "./ListView/ListView";
import CardsView from "./CardsView/CardsView";
import PropTypes from 'prop-types';

const Store = ({products}) => {
    const [isCard, changeState] = useState(true)
    const onSwitch = ()=> {
        changeState(!isCard)
    }

    if (!isCard) {
        return ( <div className='Store'>
        <IconSwitch icon={isCard} onSwitch={() =>onSwitch()} />
        <ListView items={products} />
    </div> )
    } else {
        return (<div className='Store'>
        <IconSwitch icon={isCard} onSwitch={() =>onSwitch()} />
        <CardsView cards={products} />    
    </div>)
    }
}

Store.propTypes = {
    products: PropTypes.array
  };

export default Store;