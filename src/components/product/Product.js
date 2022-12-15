import React from 'react'
import './Product.css'

import Button from '@mui/material/Button';
import { useStateValue } from '../../StateProvider';

function Product( props ) {
  
  const [ {basket} , dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type:'ADD_TO_BASKET',
      item: {
        id:props.id,
        title:props.title,
        image:props.image,
        price:props.price,
        rating:props.rating,
      },
    });
  }

  return (
    <div className='product' key={props.id}>
        <div className="product__info">
            <div className='product__name'>{props.title}</div>
            <div className='product__price'>$<strong>{props.price}</strong></div>
            <div className="product__rating">
                {Array(props.rating).fill().map((_, i)=> ( <span key={i}>⭐️</span> ))}
            </div>
        </div>
        <img src={props.image} alt="Product Image" />
        <Button className='product__button' onClick={addToBasket} variant="outlined" size='small'>Add To Basket</Button>
    </div>
  )
}

export default Product