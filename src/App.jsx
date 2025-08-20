import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
       <div className="container">
        <div id='titulo'>
          <h1>Gestão de chamados</h1>
        </div>

        <section>
         <p id='paragrafo'>Criar Novo Chamado</p> 
         <div className="input-box">
          <label id='title-input'>titulo</label>
          <input type="text" placeholder='Informe o titulo' />
         </div>

         <div className="input-box">
          <label>Profissional Responsavel</label>
          <select id="responsavel">
            <option value="" disabled selected>Escolha um responsável</option>
            <option value="rodrigo">Rodrigo</option>
            <option value="leonardo">Leonardo</option>
            <option value="elias">Elias</option>
            <option value="julio">Julio</option>
          </select>
         </div>

         <div className="input-box">
          <label>Descrição</label>
          <textarea id="description" rows={5}></textarea>
         </div>

         <div className="input-box">
          <label >Status</label>
          <select id="status">
            <option value="pendente">Pendente</option>
            <option value="Em-aberto">Em Aberto</option>
            <option value="concluido">Concluido</option>
            <option value="cancelado">Cancelado</option>
          </select>
         </div>

        </section>
      </div>
    </>
  )
}

export default App
