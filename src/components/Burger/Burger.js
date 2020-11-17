import React from 'react';
import style from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger = ( props ) => {
    return (
        <div className={style.Burger}>
            <BurgerIngredient type ='bread-top'></BurgerIngredient>
            <BurgerIngredient type = 'cheese'></BurgerIngredient>
            <BurgerIngredient type = 'salad'></BurgerIngredient>
            <BurgerIngredient type = 'meat'></BurgerIngredient>
            <BurgerIngredient type = 'salad'></BurgerIngredient>
            <BurgerIngredient type ='bread-bottom'></BurgerIngredient>
        </div>
    );
}

export default burger;