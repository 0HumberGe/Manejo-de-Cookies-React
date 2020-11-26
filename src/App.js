import './App.css';

function App() {
  return (
    <div className="App-header">
      <p className="mayus">formulario simple para la clase de lenguajes modernos de programación</p>
        <form>

          <div className="field">
            <label className="label">Nombre</label>
            <div className="control">
              <input className="input" type="text" placeholder="Nombre" />
            </div>
          </div>

          <div className="field">
            <label className="label">Matricula</label>
            <div className="control">
              <input className="input" type="text" placeholder="Matricula" />
            </div>
          </div>

          <div className="field">
            <label className="label">Clase</label>
            <div className="control">
              <input className="input" type="text" placeholder="Clase" />
            </div>
          </div>
          
        </form>
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
        </div>
    </div>
  );
}

export default App;
