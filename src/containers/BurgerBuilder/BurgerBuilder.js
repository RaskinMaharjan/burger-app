import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENTS_PRICES = {
    salad: 50,
    meat : 120,
    cheese: 100,
    bacon : 150
};

class BurgerBuilder extends Component {

    state = {
        ingredients : {
            meat : 0,
            salad : 0,
            cheese : 0,
            bacon : 0
        },
        totalPrice : 0
    }

    addIngredientsHandler = (type) => {
        const currentIngredients = {...this.state.ingredients};
        currentIngredients[type] = currentIngredients[type] + 1;
        const ingredientPrice = this.state.totalPrice + INGREDIENTS_PRICES[type];
        this.setState({
            ingredients : currentIngredients,
            totalPrice: ingredientPrice
        });

    }

    removeIngredientsHandler = (type) => {
        const currentIngredients = {...this.state.ingredients};
        if(currentIngredients[type] === 0) {
            return;
        }
        currentIngredients[type] = currentIngredients[type] -1;
        const ingredientPrice = this.state.totalPrice - INGREDIENTS_PRICES[type];
        this.setState({
            ingredients : currentIngredients,
            totalPrice: ingredientPrice
        });


    }

    render() {

        const disabledInfo = {...this.state.ingredients};
        for( let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
       return(
        <Aux>
            <Burger ingredients = {this.state.ingredients} />
            <BuildControls 
             addIngredient = {this.addIngredientsHandler}
             removeIngredient = {this.removeIngredientsHandler}
             disabled = {disabledInfo}
            />
        </Aux>
       ) 
    };
}

export default BurgerBuilder;



