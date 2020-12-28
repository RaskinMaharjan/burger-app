import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
                    .map(
                        (ingredientKey) => {
                            return (
                                <li key= {ingredientKey}>
                                    <span style={{'textTransform' : 'capitalize'}}> {ingredientKey} : </span>
                                    {props.ingredients[ingredientKey]}
                                </li>
                             )}
                    );
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>Ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Price : {props.price.toFixed(2)}</strong></p>
            <p>
                continue to checkout?
            </p>
            <Button btnType = "Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType = "Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    );
}

export default orderSummary;