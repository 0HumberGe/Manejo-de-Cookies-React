import React from 'react';
import 'bulma/css/bulma.css'
import Cookies from 'universal-cookie'
import Menu from './Buttons'

class Home extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        nombre: '',
        matricula: '',
        clase: '',
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
      alert('Datos almacenados en las cookies, pica a "Show Cookies" para verlos!')
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
            <button className="button is-link" onClick={this.handleCookies}>Sent to Cookies!</button>
          </div>
        </div>
        <Menu/>
    </div>
      )
    }
  }

  export default Home;