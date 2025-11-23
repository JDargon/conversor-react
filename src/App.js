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
    <input type="text" ref={eurosRef}></input>
    <button onClick={calcular}>Convertir</button>
    <div ref={resultadoRef}></div>
    </div>
}

export default App;
