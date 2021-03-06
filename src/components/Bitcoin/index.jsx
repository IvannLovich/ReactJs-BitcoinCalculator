import React, { Component } from 'react';
import Calculadora from '../Calculadora';

import TextField from '@material-ui/core/TextField';

import styles from './bitcoin.css';



class Bitcoin extends Component {
    constructor() {
        super()
            this.state = { 
                bpi: {},
                input: ''
            };

        this._handleChange = this._handleChange.bind(this);
      
    }

    componentDidMount() {
        fetch('https://api.coindesk.com/v1/bpi/currentprice/ARS.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const { bpi } = data;
                this.setState( { bpi } );
                
            });
    }


    
    _renderCoin() {
        // console.log(this.state.bpi); 
        const { input } = this.state;       
        const { bpi } = this.state;

        return Object.keys(bpi)
            .map(coin => {
                const price = bpi[coin].rate_float;
                const result = price;
            
              

                const show = coin === 'USD' ? 'US$' : '$';
                return (
                
                    <div className={styles.info} key={coin}>
                        <hr/>
                        <strong>{input}</strong> BTC is: <strong>{show} {(input * result).toFixed(2)}</strong>                                                       
                        <span className={styles.money}>{coin}</span>
                    </div>
        
                );
                
               

                // if (coin === 'USD'){
                //     return (
                //         <div className={styles.info} key={coin}>
                //             <hr/>
                //             <strong>{input}</strong> BTC is: <strong>U$S {(input * result).toFixed(2)}</strong> 
                //             <span className={styles.money}>{coin}</span>
                //         </div>
                //     )  
                // } else {
                //     return (
                //         <div className={styles.info} key={coin}>
                //             <strong>{input}</strong> BTC is: <strong>$ {(input * result).toFixed(2)}</strong>
                //             <span className={styles.money}>{coin}</span>
                //         </div>
                //     )
                // }
            });
        
    }

    _handleChange(event){
        this.setState({
            input: event.target.value
        })
    }


    render(){
        
        return(
            <div>
                <h2 className={styles.title}>Bitcoin Price</h2>
                {this._renderCoin()}
                <div className={styles.box}>
                <TextField
                id="outlined-adornment-amount"
                className={styles.input}
                variant="outlined"
                label="Amount"
                value={this.state.input}
                onChange={this._handleChange}
                />
                </div>
            </div>
        )
    }
}




export default Bitcoin;