import React from 'react'
import styled from 'styled-components'

const FiltroStyled = styled.div`
display: flex;
  flex-direction: column;
  border: 1px solid;
  width: 13rem;
  height: 20rem;
  padding: 1rem;
  input {
    width: 80%;
  }
  h2 {
    padding: 0;
    margin: 0;
  }

`

 class Filtro extends React.Component {
  render() {
    return (
      <FiltroStyled>
          <div>
        <h3>Filtros</h3>
      
        <p>Valores Minimos:</p>
        <input type="number" value={this.props.valueValMin} onChange={this.props.onChangeValorMin} />

        <p>Valores Maximos:</p>
        <input type="number" value={this.props.valueValMax} onChange={this.props.onChangeValorMax}  />

        <p>Buscar por produto:</p>
        <input value={this.props.valueProduto} onChange={this.props.onChangeProduto} placeholder="Pesquisa"/>
      </div>
      </FiltroStyled>
    );
  }
}

export default Filtro;