import React from "react";
import Grid from "../Template/grid";
import Buttons from "../Template/buttons";

export default props => (
    <div>
        <div role='form' className="TodoForm">
            <Grid numbers="12 9 10">
                <input id="description" className="form-control" value={props.descricao}
                    onChange={props.alterarTarefa} placeholder="Digite aqui para inserir" />
            </Grid>
            <Grid numbers="12 3 2">
                <Buttons classbtn="primary" icon="plus"
                    onClick={props.handleAdd} />
            </Grid>
        </div>
    </div>
)