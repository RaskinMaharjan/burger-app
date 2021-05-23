import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from "../../axios-orders";
import Spinner from '../../components/UI/Spinner/Spinner';
import errorHandler from '../../hoc/errorHandler/errorHandler';

const INGREDIENTS_PRICES = {
    salad: 50,
    meat : 120,
    cheese: 100,
    bacon : 150
};

class BurgerBuilder extends Component {

    state = {
        ingredients : null,
        totalPrice : 0,
        purchasable : false,
        isPurchasing : false,
        loading : false,
        error : false
    }

    componentDidMount(){
        axios.get('ingredients.json')
                .then(response => this.setState({ingredients : response.data}))
                .catch( error => this.setState({error : true}));
    }

    updatePurchaseState (ingredients) {
        const sum = Object.keys(ingredients)
                    .map(ingredientKey => {
                        return ingredients[ingredientKey];
                    }).reduce((sum, value) => {
                        return sum + value;
                    },0);
            this.setState({purchasable: sum > 0});        
    }
    

    addIngredientsHandler = (type) => {
        const currentIngredients = {...this.state.ingredients};
        currentIngredients[type] = currentIngredients[type] + 1;
        const ingredientPrice = this.state.totalPrice + INGREDIENTS_PRICES[type];
        this.setState({
            ingredients : currentIngredients,
            totalPrice: ingredientPrice
        });
        this.updatePurchaseState(currentIngredients);
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
        this.updatePurchaseState(currentIngredients);
    }

    purchaseHandler = () => {
        this.setState({isPurchasing : true});
    }

    purchaseCancelHandler = () => {
        this.setState({isPurchasing : false});
    }

    purchaseContinueHandler = () => {
        this.setState({loading : true});
        const order = {
            ingredients : this.state.ingredients,
            totalPrice : this.state.totalPrice,
            customer : {
                fullName : "Raskin Maharjan",
                email : "raskin.maharjan@gmail.com",
                phone : "1234567890",
                address : {
                    city : "Siddhipur",
                    state : "Lalitpur",
                    COuntry: "Nepal"
                }
            }
        }
        axios.post('order.json', order)
        .then(response => {
            console.log(response);
            this.setState({loading : false, isPurchasing : false});
        })
        .catch(error => {
            console.log(error);
            this.setState({loading : false, isPurchasing : false});
        });
    }

    render() {

        const disabledInfo = {...this.state.ingredients};
        for( let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = null;
        let burger = this.state.error ? <p> Ingrediants cannot be loaded</p> : <Spinner />
         
        if(this.state.ingredients){
            burger = (
                <Aux>
                    <Burger ingredients = {this.state.ingredients} />
                    <BuildControls 
                        addIngredient = {this.addIngredientsHandler}
                        removeIngredient = {this.removeIngredientsHandler}
                        disabled = {disabledInfo}
                        price = {this.state.totalPrice}
                        purchaseOrder = {this.purchaseHandler}
                        purchasable = {this.state.purchasable}
                    />
                </Aux>
         )

        orderSummary = <OrderSummary 
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}
         />

         if(this.state.loading){
             orderSummary = <Spinner />
         }
        } 
             

       return(
        <Aux>
            <Modal show = {this.state.isPurchasing} modalClicked = {this.purchaseCancelHandler}>
                {orderSummary}
            </Modal>
            {burger}
        </Aux>
       ) 
    };
}

export default errorHandler(BurgerBuilder, axios);



