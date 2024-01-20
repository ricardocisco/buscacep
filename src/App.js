import { useState } from "react";
import api from "../src/services/api"


function App() {

  const [value, setValue] = useState('');

  const [cep, setCep] = useState({});

  async function handleSearch(){
    if( value === ""){
      alert("Campo Vazio!")
      return;
    }

    try{
      const response = await api.get(`${value}/json`);
      setCep(response.data);
      setValue("");
    }catch{
      alert("Erro ao buscar!")
      setValue("")
    }
  }

  return (
  <div className="wrapper">
    <h1 className="box-title">Busca Cep</h1>
    <div className="box">
      <input 
      type="text"
      placeholder="Insira seu cep"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="box-input"
      />
      <button className="box-btn" onClick={handleSearch}>Buscar</button>
    </div>

    {Object.keys(cep).length > 0 && (
      <main className="box-main">
        <p>CEP: {cep.cep}</p>
        <p>Rua: {cep.logradouro}</p>
        <p>Bairro: {cep.bairro}</p>
        <p>Cidade: {cep.localidade}</p>
        <p>Estado: {cep.uf}</p>
      </main>
    )}
  </div>
  );
}

export default App;
