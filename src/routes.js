import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';


import Home from './components/Home/home';
import Layout from './hoc/Layout/layout';
import Cars from './components/Pages/Car/index';


class Routes extends Component {

    render(){
        return(
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/cars" exact component={Cars}/>
                </Switch>
            </Layout>   
        ) 
    }
}

export default Routes;