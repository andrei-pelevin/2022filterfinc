import React from 'react';


const ShopItem = ({ item }) => {
    return (
        <div className='ShopItem mb-3 bg-light d-flex justify-content-between'  >
            <div><img className='ShopItemImg col-2' alt='' src={item.img} /></div>
            <h4 className='col-2 align-self-center'>{item.name}</h4>
            <h6 className='col-1 align-self-center'>{item.color}</h6>
            <h5 className='text-danger align-self-center'>${item.price}</h5>
            <button className='btn btn-outline-danger align-self-center' style={{height:40+ 'px', borderRadius: 15+'px', marginRight:10+'px'}}>ADD TO CART</button>
        </div>
    )
}

export default ShopItem;