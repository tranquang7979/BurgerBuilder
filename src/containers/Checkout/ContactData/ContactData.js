import React, {Component} from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component{

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false     
    }

    orderHandler = (event) =>{
        event.preventDefault();
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Steven Tran',
                address: {
                    street: 'Nguyen Van Troi',
                    zipCode: '700000',
                    country: 'VietNam'
                },
                email: 'tranquang7979@gmail.com'
            },
            deliveryMethod: 'Visa Card'
        };
        axios.post('/orders.json', order)
            .then(response => {
                console.log(response);
                this.setState({loading:false});
                this.props.history.push('/');

            })
            .catch(error => {
                console.log(error);
                this.setState({loading:false});
            });
    }

    render(){
        let form = (
            <form>
                
                <input inputtype="input" className={classes.Input} type="text" name="name" placeholder="Your Name"/>
                <input inputtype="input" className={classes.Input} type="email" name="email" placeholder="Your Email"/>
                <input inputtype="input" className={classes.Input} type="text" name="street" placeholder="Street"/>
                <input inputtype="input" className={classes.Input} type="text" name="postal" placeholder="Postal Code"/>
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if(this.state.loading){
            form = <Spinner/>;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;