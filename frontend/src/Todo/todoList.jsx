import React from "react";
import Buttons from "../Template/buttons";

export default props => {
    const rendertable = () => {

        let list = props.list || []

        return list.map(todo => {
            return (
                <tr key={todo._id} className={todo.done ? 'doneIsTrue' : ''} >
                    <td>{todo.description}</td>
                    <td>
                        <Buttons classbtn="danger" icon="trash-o" hide={todo.done != true} onClick={() => props.handleRemove(todo)}></Buttons>
                        <Buttons classbtn="success" icon="check" hide={todo.done === true} onClick={() => props.handleIsDone(todo)}></Buttons>
                        <Buttons classbtn="warning" icon="undo" hide={todo.done != true} onClick={() => props.handleIsntDone(todo)}></Buttons>
                    </td>
                </tr>
            )
        })
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="buttonsLayout">Ações</th>
                </tr>
            </thead>
            <tbody>
                {rendertable()}
            </tbody>
        </table>
    )
}