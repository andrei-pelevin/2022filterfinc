import React from 'react';

const ShopCard = ({card}) => {
    return (
        <div className='ShopCard card m-5 bg-light col-3'  >            
            <h5 className='d-flex card-title justify-content-center'>{card.name}</h5>            
            <h6 className='d-flex card-title justify-content-center'>{card.color}</h6>
            <div><img className='card-img-top' alt='' src={card.img}/></div>
            <div className='d-flex justify-content-between m-3'>
                <h5 className='text-danger align-self-center'>${card.price}</h5>
                <button className='btn btn-outline-danger' style={{height:40+ 'px', borderRadius: 15+'px'}}>ADD TO CART</button>
            </div>


            
        </div>
    )
}

export default ShopCard;