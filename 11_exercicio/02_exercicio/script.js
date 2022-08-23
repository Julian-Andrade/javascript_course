class Carrinho {
  constructor(itens, qtd, valor_total) {
    this.itens = itens;
    this.qtd = qtd;
    this.valor_total = valor_total;
  }

  // Adicionar item no carrinho
  addItem(item) {
    let contador = 0;

    for (let itemCarrinho in this.itens) {
      // Caso exista o id em item.id
      if (this.itens[itemCarrinho].id == item.id) {
        // Adicione mais em item.qtd
        this.itens[itemCarrinho].qtd += item.qtd;
        // Caso exista algum item no carrinho.
        contador = 1;
      }
    }

    if (contador == 0) {
      this.itens.push(item);
    }

    // Adiciona item.qtd em this.qtd
    this.qtd += item.qtd;
    // Adicione (item.preco * item.qtd) em this.valorTotal
    this.valor_total += item.preco * item.qtd;
  }

  removeItem(item) {
    for (let itemCarrinho in this.itens) {
      // Remoção apenas de itens que estão no carrinho.
      if (this.itens[itemCarrinho].id == item.id) {
        // Gravar o array em uma variável
        let obj = this.itens[itemCarrinho];
        // Buscar o index do array
        let index = this.itens.findIndex(function (obj) {
          return obj.id == item.id;
        });

        // Remove item.qtd em this.qtd
        this.qtd -= obj.qtd;
        // Remove (item.preco * item.qtd) em this.valorTotal
        this.valor_total -= obj.preco * obj.qtd;

        // Remoção do item do array
        this.itens.splice(index, 1);
      }
    }
  }
}

let carrinho = new Carrinho(
  [
    {
      id: 01,
      nome: "Camisa",
      qtd: 1,
      preco: 20,
    },
    {
      id: 02,
      nome: "Calça",
      qtd: 2,
      preco: 50,
    },
  ],
  3,
  120
);

console.log(carrinho);

carrinho.addItem({ id: 01, nome: "Camisa", qtd: 2, preco: 200 });

console.log(carrinho);

carrinho.addItem({ id: 03, nome: "Boné", qtd: 2, preco: 100 });

console.log(carrinho);

carrinho.removeItem({ id: 01, nome: "Camisa", qtd: 2, preco: 200 });

console.log(carrinho);
