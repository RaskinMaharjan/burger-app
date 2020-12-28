import React from 'react';
import BuildControl from './BuildContol/BuildControl';
import style from './BuildControls.css'


const controls = [
    {label: "Salad", type: "salad"},
    {label: "Bacon", type: "bacon"},
    {label: "Cheese", type: "cheese"},
    {label: "Meat", type: "meat"}

];
const buildControls = (props) => (
    <div className={style.BuildControls}>
        <p>Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
            key={ctrl.label}
            label={ctrl.label}
            added = {() => props.addIngredient(ctrl.type)}
            removed = {() => props.removeIngredient(ctrl.type)} 
            disabled = {props.disabled[ctrl.type]}
            />
        ))}

        <button className={style.OrderButton}
                disabled = {!props.purchasable}
                onClick = {props.purchaseOrder}
        >ORDER NOW</button>

    </div>
);



export default buildControls;