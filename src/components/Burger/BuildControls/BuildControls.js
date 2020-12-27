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
        {controls.map(ctrl => (
            <BuildControl 
            key={ctrl.label}
            label={ctrl.label}
            added = {() => props.addIngredient(ctrl.type)}
            removed = {() => props.removeIngredient(ctrl.type)} 
            disabled = {props.disabled[ctrl.type]}
            />
        ))}

    </div>
);



export default buildControls;