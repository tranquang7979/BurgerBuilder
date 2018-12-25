import React from 'react';
import classes from './BuildControl.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(x => (
            <BuildControl 
                key={x.label} 
                label={x.label}
                type={x.type}
                added={() => props.ingredientAdded(x.type)}
                removed={()=>props.ingredientRemoved(x.type)}
                disabled={props.disabled[x.type]}/>
        ))}
        <button className={classes.OrderButton} 
                disabled={!props.purchasable}
                onClick={props.ordered}>
            ORDER NOW
        </button>
    </div>
);

export default buildControls;