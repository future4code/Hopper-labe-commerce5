import React from 'react'
import styled from 'styled-components'

const FiltroStyled = styled.div`
display: flex;
  flex-direction: column;
  border: 1px solid;
  width: 13rem;
  height: 50%;
  padding: 10vh 2vw;
  input {
    width: 80%;
  }
  h2 {
    padding: 0;
    margin: 0;
  }
  align-self: flex-start;
  margin-top: 7vh;

`

const Filtros = styled.div`
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
h3{
  text-decoration-line: underline;
}

  p{
  margin-top:5vh;
}



`

 class Filtro extends React.Component {
  render() {
    return (
      <FiltroStyled>
          <Filtros>
        <h3>Filtros</h3>
      
        <p>Valores Minimos:</p>
        <input type="number" value={this.props.valueValMin} onChange={this.props.onChangeValorMin} />

        <p>Valores Maximos:</p>
        <input type="number" value={this.props.valueValMax} onChange={this.props.onChangeValorMax}  />

        <p>Buscar por produto:</p>
        <input value={this.props.valueProduto} onChange={this.props.onChangeProduto} placeholder="Pesquisa"/>
      </Filtros>
      </FiltroStyled>
    );
  }
}

export default Filtro;