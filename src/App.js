import { useRef, useState, useEffect } from "react"
import './App.css'

function App() {

  const [valorCambio, setValorCambio] = useState(null);
  const eurosRef = useRef();
  const resultadoRef = useRef();

  useEffect(() => {

    const llamaApiCambio = async () => {

      try {

        const respuesta = await fetch("https://v6.exchangerate-api.com/v6/46b4858915e04d322817be31/latest/EUR");
        const datos = await respuesta.json();
        
        setValorCambio(datos.conversion_rates.USD);
       

      } catch (error) {
        console.error("Error al acceder a la API", error);
      }

    };

    llamaApiCambio();

  }, []);

  const calcular = () => {
    const eurosValor = parseFloat(eurosRef.current.value);
    const dolares = eurosValor * valorCambio;
    resultadoRef.current.innerHTML = dolares.toFixed(2) + "$";
  }

  return <div>
    <h1>Conversor Euro-Dólar</h1>
    <input className="centrarElementos" type="text" ref={eurosRef}></input><br />
    <button className="centrarElementos" onClick={calcular}>Convertir</button><br />
    <div className="centrarElementos resultado" ref={resultadoRef}></div>
  </div>
}

export default App;
