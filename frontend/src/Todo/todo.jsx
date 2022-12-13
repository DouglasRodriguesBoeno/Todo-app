import React, { Component } from 'React'
import PageHeader from '../Template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = { descricao: '', list: [] }

        this.alterarTarefa = this.alterarTarefa.bind(this)
        this.adicionarTarefa = this.adicionarTarefa.bind(this)
    }

    alterarTarefa(e) {
        this.setState({...this.state, descricao: e.target.value})
    }

    adicionarTarefa() {
        console.log(this)
    }

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
                <TodoForm alterarTarefa={this.alterarTarefa} adicionarTarefa={this.adicionarTarefa} descricao={this.state.descricao} />
                <TodoList />
            </div>
        )
    }
}