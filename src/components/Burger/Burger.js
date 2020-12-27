import React from 'react';
import style from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger = ( props ) => {
    
    let transaformedIngredients = Object.keys(props.ingredients)
                                    .map ( keys => {
                                        return [...Array(props.ingredients[keys])]
                                                .map((_, index) => {
                                                  return  <BurgerIngredient key={keys + index} type = {keys} />
                                                })
                                    }).reduce((updatedArray, currentELement) => {
                                       return updatedArray.concat(currentELement); 
                                    }, []);

    if(transaformedIngredients.length === 0) {
        transaformedIngredients = <p> Please start adding ingredients</p>
    }
    return (
        <div className={style.Burger}>
            <BurgerIngredient type ='bread-top'></BurgerIngredient>
            {transaformedIngredients}
            <BurgerIngredient type ='bread-bottom'></BurgerIngredient>
        </div>
    );
}

export default burger;