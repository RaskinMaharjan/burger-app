import React, {Component} from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button'

class OrderSummary  extends Component{


    //this can be functional component as we are not using shouldCompoentUpdate method
    componentWillUpdate() {
        console.log("Order Summary will update");
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(
            (ingredientKey) => {
                return (
                    <li key= {ingredientKey}>
                        <span style={{'textTransform' : 'capitalize'}}> {ingredientKey} : </span>
                        {this.props.ingredients[ingredientKey]}
                    </li>
                 )}
        );

        return (
            <Aux>
            <h3>Your Order</h3>
            <p>Ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Price : {this.props.price.toFixed(2)}</strong></p>
            <p>
                continue to checkout?
            </p>
            <Button btnType = "Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
            <Button btnType = "Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
        </Aux>
        )
    }
}


export default OrderSummary;