import React from "react";
import "./Checkout.css";

import Subtotal from "./../../components/subtotal/Subtotal";
import BasketItem from "../../components/basketItem/BasketItem";
import Header from "../../components/header/Header";
import { useStateValue } from "../../StateProvider";

function CheckoutPage() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <>
            <Header />
            <div className="checkout">
                <div className="checkout__left">
                    <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="Amazon Checkout Banner" className="checkout__leftImage" />
                    <h3 className="checkout__userName">{user?.email}</h3>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    {basket.map((item, i) => (
                        <BasketItem key={i} id={item.id} title={item.title} price={item.price} image={item.image} rating={item.rating} />
                    ))}
                </div>
                <div className="checkout__right">
                    <h3 className="checkout__subtotal">
                        <Subtotal />
                    </h3>
                </div>
            </div>
        </>
    );
}

export default CheckoutPage;