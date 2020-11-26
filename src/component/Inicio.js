import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import '../App.css';

class Inicio extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        nombre: '',
        matricula: '',
        clase: '',
      }
    }
    
    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const values = JSON.stringify(this.state)
        alert(values)
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
            <button className="button is-link" onClick={this.handleSubmit}>Submit</button>
          </div>
        </div>
    </div>
      )
    }
  }
  export default Inicio;
