import React, { Component } from 'react';
import Header from './components/Header';
import Bitcoin from './components/Bitcoin';

import 'normalize.css';
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

    render() {
        return (
            <div>
             <Header />
             <Bitcoin />
            </div>
        ) 
    }
}


export default App