// Utilizando a biblioteca readline, para receber entrada é saida de dados no terminal
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Limpar o terminal
function limparTerminal() {
  process.stdout.write('\u001B[2J\u001B[0;0f');
}

class Heroi {
  constructor(nome, idade, tipo) {
    // definindo os tipo do meu codigo!
    const tiposValidos = ['Mago', 'Guerreiro', 'Monge', 'Ninja'];
    
    if (!tiposValidos.includes(tipo)) {
      // caso não estiver dentro do padrão definido, vai aparecer a mensagem abaixo!
      throw new Error(`Tipo de Herói inválido: ${tipo}`);
    }

    this.dados = {
      nome: nome,
      idade: idade,
      tipo: tipo
    };
  }

  atacar() {
    // verificando se mago, ninja, guerreiro e monge esta incluso no tipo....
    if (!['Mago', 'Ninja', 'Guerreiro', 'Monge'].includes(this.dados.tipo)) {
      console.log('Tipo de herói não reconhecido. Não é possível atacar.');
      return;
    }

    // criando uma estrutura de decisão
    switch (this.dados.tipo) {
      case 'Mago':
        console.log(`O ${this.dados.tipo} usou magia.`);
        break;
      case 'Guerreiro':
        console.log(`O ${this.dados.tipo} usou espada.`);
        break;
      case 'Monge':
        console.log(`O ${this.dados.tipo} usou artes marciais.`);
        break;
      case 'Ninja':
        console.log(`O ${this.dados.tipo} usou shuriken.`);
        break;
      default:
        console.log('Tipo de herói não reconhecido. Não é possível atacar.');
    }
  }
}

// Criando uma estrutura para receber dados
rl.question('Digite o nome do herói: ', (nome) => {
  rl.question('Digite a idade do herói: ', (idade) => {
    rl.question('Digite o tipo do herói (Mago, Guerreiro, Monge, Ninja): ', (tipo) => {
      const instancia = new Heroi(nome, idade, tipo);
      limparTerminal();
      instancia.atacar();
      rl.close();
    });
  });
});
