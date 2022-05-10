import React from 'react'
import styled from 'styled-components'

const CarrinhoStyled = styled.div`
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

class Carrinho extends React.Component {
  render() {
    return (
      <CarrinhoStyled>
        <h2>Carrinho:</h2>
        <p>Valor total: R$</p>
      </CarrinhoStyled>
    )
  }
}

export default Carrinho