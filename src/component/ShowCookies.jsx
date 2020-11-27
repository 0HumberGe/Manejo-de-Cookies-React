import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import '../App.css';
import Cookies from 'universal-cookie'
import Menu from './Buttons'
class ShowCookies extends React.Component{

    cookies = new Cookies()
    render(){
        return(
            <div className="App-header">
                <p className="mayus">datos recuperados del formulario</p><p className="mayus">en cookies</p>
                <div>
                    <p className="sh-cook space-top">Nombre:</p>
                    <p className="sh-cook box-cook px-4 py-1 mt-1">{this.cookies.get('nombre')}</p>
                    <p className="sh-cook space-top">Matricula:</p>
                    <p className="sh-cook box-cook px-4 py-1 mt-1">{this.cookies.get('matricula')}</p>
                    <p className="sh-cook space-top">Clase:</p>
                    <p className="sh-cook box-cook px-4 py-1 mt-1">{this.cookies.get('clase')}</p>
                </div>
                <Menu/>    
            </div>
        )
    }
}

export default ShowCookies;