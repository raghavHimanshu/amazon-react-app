import React from 'react'
import { useStateValue } from '../../StateProvider'
import './BasketItem.css'

function BasketItem(props) {

    const [ {basket}, dispatch ] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:props.id,
        });
    }

  return (
    <div className='basketItem'>
        <img src={props.image} alt={props.title} className="basketItem__image" />
        <div className="basketItem__info">
            <p className="basketItem__title">{props.title}</p>
            <p className='basketItem__price'><small>$</small><strong>{props.price}</strong></p>
            <div className="basketItem__rating">
                {Array(props.rating).fill().map((_, i)=> ( <span key={i}>⭐️</span> ))}
            </div>
            <button className='basketItem__removeButton' onClick={removeFromBasket}>Remove from Basket</button>
        </div>
    </div>
  )
}

export default BasketItem