import React from "react";
import styled from "styled-components";
import Carrinho from "./components/Carrinho";
import Filtro from "./components/Filtro";

const Imagem = styled.div`
  height: 100px;
`;
const SecaoPacotesStyle = styled.div`
  display: flex;
  flex-direction: row;
`;

const SecaoStyleHome = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem;
`;
const NovoCarrinho = styled.div`
display: flex;
  flex-direction: column;
  border: 1px solid;
  width: 13rem;
  height: 20rem;
  padding: 1rem;
 
  h2 {
    padding: 0;
    margin: 0;
  }
`

class App extends React.Component {
  state = {
    pacotesViagens: [
      {
        id: 1,
        name: "Lua Calisto",
        value: 300.0,
        img: (
          <Imagem src="https://st2.depositphotos.com/3732989/12445/i/950/depositphotos_124454090-stock-photo-address-bar-of-browser.jpg" />
        ),
       
      },
      {
        id: 2,
        name: "Lua Almateia",
        value: 900.0,
        img: (
          <Imagem src="https://st2.depositphotos.com/3732989/12445/i/950/depositphotos_124454090-stock-photo-address-bar-of-browser.jpg" />
        ),
      },
      {
        id: 3,
        name: "Lua IO",
        value: 300.0,
        img: (
          <Imagem src="https://st2.depositphotos.com/3732989/12445/i/950/depositphotos_124454090-stock-photo-address-bar-of-browser.jpg" />
        ),
      },
      {
        id: 4,
        name: "Lua Ganímedes",
        value: 500.0,
        img: (
          <Imagem src="https://st2.depositphotos.com/3732989/12445/i/950/depositphotos_124454090-stock-photo-address-bar-of-browser.jpg" />
        ),
      },
      {
        id: 5,
        name: "Lua Europa",
        value: 800.0,
        img: (
          <Imagem src="https://st2.depositphotos.com/3732989/12445/i/950/depositphotos_124454090-stock-photo-address-bar-of-browser.jpg" />
        ),
       
      },
    ],

    filtroNome: "",
    filtroValorMin: "",
    filtroValorMax: "",
    /* order: "", */
    carrinho: [],
    
    
  };

  removerPacoteDoCarrinho = (idPacoteARemover) => {
   const carrinhoAtualizado = this.state.carrinho.filter(compra => compra.pacote.id !== idPacoteARemover)
      this.state.carrinho = carrinhoAtualizado
    this.setState({...this.state})
    
     }
    atualizarCarrinho = (novoPacote) =>{
      const compraJaAdicionada = this.state.carrinho.find(compra => compra.pacote.id === novoPacote.id)
      if(compraJaAdicionada){
          compraJaAdicionada.quantidade = compraJaAdicionada.quantidade + 1
         
           }else{
         
        this.state.carrinho.push({pacote: novoPacote,quantidade:1})

      }
      this.setState({...this.state})
    }
    totalPacotes = (totalCarrinho) =>{
      
        let novoValor = totalCarrinho.map((valor)=>{
            return valor.total
          
           })  
            

       
           console.log(novoValor)
         
        let soma = novoValor.reduce((primeiroValor,segundoValor)=> primeiroValor + segundoValor, 0)
       
        return soma
        
     }
     
      
    //faça aqui a lógica do carrinho//

  valorMin = (event) => {
    this.setState({ filtroValorMin: event.target.value });
  };

  valorMax = (event) => {
    this.setState({ filtroValorMax: event.target.value });
  };

  produto = (event) => {
    this.setState({ filtroNome: event.target.value });
  };

  onChangeOrder = (event) => {
    this.setState({ order: event.target.value });
  };
  

  render() {
    
   
    
    const compras = this.state.carrinho.map((novaCompra,index)=>{
        novaCompra.total = novaCompra.pacote.value * novaCompra.quantidade
        
          return(
          <div key={index}>
            <p> Produto: {novaCompra.pacote.name} </p>
            <p>Valor: {novaCompra.pacote.value} </p>
            <p>Qtd:{novaCompra.quantidade} </p>
            <p>Valor total:{novaCompra.total} </p>
            <button onClick={() => this.removerPacoteDoCarrinho(novaCompra.pacote.id)}>X</button>
            
          </div>
          )
        
                
        });
       
     let total = this.totalPacotes(this.state.carrinho);

    
    const pacotesFiltrados = this.state.pacotesViagens
      .filter((pacotes) => {
        return pacotes.name
          .toLowerCase()
          .includes(this.state.filtroNome.toLowerCase());
      })
      .filter((pacotes) => {
        return (
          this.state.filtroValorMin === "" ||
          pacotes.value >= this.state.filtroValorMin
        );
      })
      .filter((pacotes) => {
        return (
          this.state.filtroValorMax === "" ||
          pacotes.value <= this.state.filtroValorMax
        );
      })
      
      /* .sort((pacotes, proxPacote) => {
        switch (this.state.order) {
          case "crescente":
            return (
              pacotes.value >= proxPacote.value ||
              pacotes.name.lolcaleCompare(proxPacote.name) >=
                proxPacote.name.lolcaleCompare(pacotes.name)
            );
          default:
            return (
              pacotes.value <= proxPacote.value ||
              pacotes.name.lolcaleCompare(proxPacote.name) <=
                proxPacote.name.lolcaleCompare(pacotes.name)
            );
        }
      }) */
      .map((pacote, index) => {
        return (
          <SecaoPacotesStyle key={index}>
            <div>
              <div>{pacote.img}</div>
              <p>{pacote.name}</p>
              <p>Valor: R$ {pacote.value}</p>
              <button onClick={ () => this.atualizarCarrinho(pacote)}  >Adicionar ao Carrinho</button>
            </div>
          </SecaoPacotesStyle>
        );
      });

    return (
      <SecaoStyleHome>
        <Filtro
          valueValMin={this.state.filtroValorMin}
          onChangeValorMin={this.valorMin}
          valueValMax={this.state.filtroValorMax}
          onChangeValorMax={this.valorMax}
          valueProduto={this.state.filtroNome}
          onChangeProduto={this.produto}
        />

        <div>
          <p>Quantidade: 10</p>

          <label>
            Ordenação:
            <select
              name="order"
              value={this.state.order}
              onChange={this.onChangeOrder}
            >
              <option value="cres">Crescente</option>
              <option value="decres">Decrescente</option>
            </select>
          </label>

          <div>{pacotesFiltrados}</div>
        </div>

        <div>
        <NovoCarrinho>
          <h2>Carrinho</h2>
        {compras}
        <h4>Totais: {total} </h4>
        </NovoCarrinho>
          
        
        </div>
        
        
        
        
          
       
        
         
          
       
      </SecaoStyleHome>
    );
  }
}

export default App;
    
    
    
    
     
    
  
