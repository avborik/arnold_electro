import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';


import Home from './components/Home/home';
import Layout from './hoc/Layout/layout';
import Cars from './components/Pages/Car/index';
import About from './components/Pages/About/index';
import Forklift from './components/Pages/ForkLift/index';
import HeavyEl from './components/Pages/Heavy/index';
import Industrial from './components/Pages/Industrial/index';
import Truck from './components/Pages/Truck/index';


class Routes extends Component {

    render(){
        return(
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/cars" exact component={Cars}/>
                    <Route path="/about" exact component={About}/>
                    <Route path="/forklifts" exact component={Forklift}/>
                    <Route path="/heavy" exact component={HeavyEl}/>
                    <Route path="/industrial" exact component={Industrial}/>
                    <Route path="/Trucks" exact component={Truck}/>
                    

                </Switch>
            </Layout>   
        ) 
    }
}

export default Routes;