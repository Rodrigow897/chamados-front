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
          <select id="select-input">
            <option value="TI">TI</option>
            <option value="CA">CA</option>
          </select>
         </div>

         <div className="input-box">
          <label>Descrição</label>
          <textarea id="description"></textarea>
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
