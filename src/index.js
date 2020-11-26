import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/css/bulma.css'
import Cookies from 'universal-cookie'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import ShowCookies from "./component/ShowCookies"

class Inicio extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      nombre: ' ',
      matricula: ' ',
      clase: ' ',
    }
  }
  cookies = new Cookies();
  
  handleChange = (e) => {
      const {name, value} = e.target
      this.setState({ [name]: value })
  }

  handleCookies = e => {
    this.cookies.set('nombre', this.state.nombre, {path: '/'});
    this.cookies.set('matricula', this.state.matricula, {path: '/'});
    this.cookies.set('clase', this.state.clase, {path: '/'});
  }
      
  render () {
      const { nombre, matricula, clase } = this.state
    return (
      <div className="App-header">
    <p className="mayus">formulario simple para la clase</p><p className="mayus"> de lenguajes modernos de programación</p>
      <form >

        <div className="field space-top">
          <label className="label fcolor-white">Nombre</label>
          <div className="control">
            <input className="input" type="text" name = "nombre" value={nombre} onChange={this.handleChange} placeholder="Nombre" />
          </div>
        </div>

        <div className="field">
          <label className="label fcolor-white">Matricula</label>
          <div className="control">
            <input className="input" type="number" name = "matricula" value={matricula} onChange={this.handleChange} placeholder="Matricula" />
          </div>
        </div>

        <div className="field">
          <label className="label fcolor-white">Clase</label>
          <div className="control">
            <input className="input" type="text" name = "clase" value={clase} onChange={this.handleChange} placeholder="Clase" />
          </div>
        </div>
        
      </form>
      <div className="field is-grouped space-top">
        <div className="control">
          <button className="button is-link" onClick={this.handleCookies}>Submit</button>
        </div>
      </div>
      <div className="field is-grouped space-top">
        <div className="control">
          <button className="button is-link" >Show Cookies</button>
          
        </div>
      </div>
  </div>
    )
  }
}

ReactDOM.render(
    <Inicio />,
    //<ShowCookies/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
