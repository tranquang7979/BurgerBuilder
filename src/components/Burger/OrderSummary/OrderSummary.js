import React from 'react';
import Aux from '../../../hoc/Auxx';
import Button from '../../UI/Button/Button';

const orderSummary = (props) =>{
    const ingredientSummary = 
        Object.keys(props.ingredients)
                .map(x=>{
                    return <li key={x}><span style={{textTransform:'capitalize'}}>{x}</span>: {props.ingredients[x]}</li>;
                });
    return  (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" 
                    clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button btnType="Success"
                    clicked={props.purchaseContinue}>SUCCESS</Button>
        </Aux>
    )
};

export default orderSummary;