import React, {Component} from 'react';
import './layout.module.css'


import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';


class Layout extends Component{
    state = {
        showNav:false
    }

    render(){
        return(
            <div className="container">
                <Header/>
                {this.props.children}
                <Footer/> 
            </div>
        )
    }
}

export default Layout;
