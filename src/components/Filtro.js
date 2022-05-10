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
        <h2>Filtros</h2>
        <p>Valor mínimo:</p>
        <input></input>
        <p>Valor máximo:</p>
        <input></input>
        <p>Busca por nome:</p>
        <input></input>
      </FiltroStyled>
    )
  }
}

export default Filtro