import React, { Component } from 'React'
import axios from 'axios'

import PageHeader from '../Template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }

        this.alterarTarefa = this.alterarTarefa.bind(this)
        this.handleAdd = this.handleAdd.bind(this)

        this.handleIsDone = this.handleIsDone.bind(this)
        this.handleIsntDone = this.handleIsntDone.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.refresh()
    }

    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createAt${search}`)
            .then(resp => this.setState({ ...this.state, description, list: resp.data }))
    }

    alterarTarefa(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    handleAdd() {
        const description = this.state.description
        axios.post(URL, { description })
            .then(_ => this.refresh())
    }

    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(_ => this.refresh(this.state.description))
    }

    handleIsDone(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo.data, done: true })
            .then(resp => this.refresh(this.state.description))
    }

    handleIsntDone(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo.data, done: false })
            .then(resp => this.refresh(this.state.description))
    }

    handleSearch() {
        this.refresh(this.state.description)
    }

    handleClear() {
        this.refresh();
    }

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
                <TodoForm alterarTarefa={this.alterarTarefa}
                    handleAdd={this.handleAdd}
                    descricao={this.state.description}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear} />

                <TodoList list={this.state.list}
                    handleRemove={this.handleRemove}
                    handleIsDone={this.handleIsDone}
                    handleIsntDone={this.handleIsntDone} />
            </div>
        )
    }
}