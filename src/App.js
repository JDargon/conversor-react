import { useRef } from "react"
import './App.css'

function App() {

  const eurosRef = useRef();
  const resultadoRef = useRef();

  const calcular=()=>{
    const eurosValor=eurosRef.current.value;
    const dolares=eurosValor*1.15;
    resultadoRef.current.innerHTML=dolares;
  }

  return <div>
    <h1>Conversor Euro-Dólar</h1>
    <input className="centrarElementos" type="text" ref={eurosRef}></input><br/>
    <button className="centrarElementos" onClick={calcular}>Convertir</button><br/>
    <div className="centrarElementos resultado" ref={resultadoRef}></div>
    </div>
}

export default App;
