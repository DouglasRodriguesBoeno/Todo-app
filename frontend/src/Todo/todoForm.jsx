import React from "react";
import Grid from "../Template/grid";
import Buttons from "../Template/buttons";

export default props => {
    const keyHandler = e => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        }
        else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

    return (
        <div>
            <div role='form' className="TodoForm">
                <Grid numbers="12 9 10">
                    <input id="description" className="form-control" value={props.descricao}
                        onChange={props.alterarTarefa}
                        onKeyUp={keyHandler}
                        placeholder="Digite aqui para inserir" />
                </Grid>
                <Grid numbers="12 3 2">
                    <Buttons classbtn="primary" icon="plus"
                        onClick={props.handleAdd} />
                    <Buttons classbtn="info" icon="search"
                        onClick={props.handleSearch} />
                    <Buttons classbtn="default" icon="close"
                        onClick={props.handleClear} />
                </Grid>
            </div>
        </div>
    )
}