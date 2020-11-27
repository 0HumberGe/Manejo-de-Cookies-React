import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import '../App.css';
import {Link} from 'react-router-dom'

class Menu extends React.Component{
    render(){
        return(
            <section className ="button-menu pt-6">
                <div className="control px-4">
                        <Link to='/'>
                            <button className="button is-link" >Form Page</button>
                        </Link>     
                    </div>      
                    <div className="control px-4">
                        <Link to='/showcookies'>
                            <button className="button is-link" >Show Cookies</button>
                        </Link>     
                </div>
            </section>
        )
    }
}
/* */
export default Menu;