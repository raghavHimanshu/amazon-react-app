import React from "react";
import "./Subtotal.css";

import CurrencyFormat from "react-currency-format";

import { useStateValue } from "../../StateProvider";
import { getBasketTotal } from "../../reducer";

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat 
            renderText={(value)=> (
                <>
                    <p>
                        Subtotal ({basket.lenght} items): <strong>{value}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox" /> This order contain a gift
                    </small>
                </>
            )}
            value={getBasketTotal(basket)}
            decimalScale={2}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />
            <p>
                Subtotal ({basket.lenght} items): <strong>{getBasketTotal(basket)}</strong>
            </p>
            <small className="subtotal__gift">
                <input type="checkbox" /> This order contain a gift
            </small>
            <button className="subtotal__checkout">Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal;