import React, { Component } from 'react';
import Form from './Form';
import Tarefas from './Tarefas';

import './Main.css'
class Main extends Component {
  state = {
    novaTarefa: '',
    tarefa: [],
    index: -1,
  }

  componentDidMount(){
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));
    if(tarefas){
      this.setState({
        tarefa: [...tarefas]
      })
    }
  }
  componentDidUpdate(prevProps, prevState){
    const {tarefa} = this.state;

    if(tarefa === prevState.tarefa) return;

    localStorage.setItem('tarefas', JSON.stringify(tarefa));
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    const {tarefa, index} = this.state;
    let {novaTarefa}= this.state;
    novaTarefa = novaTarefa.trim();

    if(tarefa.indexOf(novaTarefa) !== -1) return;

    const novasTarefas = [...tarefa];

    if(index === -1){
      this.setState({
      novaTarefa: '',
      tarefa: [...novasTarefas, novaTarefa]
      })
    }
    else{
      novasTarefas[index] = novaTarefa;
      this.setState({
        tarefa: [...novasTarefas],
        index: -1
      })
    }
  }

  handleDelete = (e, index) =>{
    const {tarefa} = this.state;
    const tarefas = [...tarefa];
    tarefas.splice(index, 1);
    this.setState({
      tarefa: [...tarefas]
    })
  }

  handleEdit = (e, index) =>{
    const {tarefa} = this.state
    this.setState({
      index: index,
      novaTarefa: tarefa[index]
    })
  }

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  }

  render() {
    const { novaTarefa, tarefa } = this.state;

    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>
        <Form handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        novaTarefa={novaTarefa} />
        <Tarefas
        tarefa={tarefa}
        handleEdit={this.handleEdit}
        handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default Main;
