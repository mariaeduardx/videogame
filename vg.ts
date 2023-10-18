class VideoGame {
    nome: string;
    genero: string;
    numeroJogadores: number;
    plataforma: [string];
    preco: number

    constructor(nome: string, genero: string, numeroJogadores: number, plataforma: [string], preco: number){
        this.nome = nome;
        this.genero = genero;
        this.numeroJogadores = numeroJogadores;
        this.plataforma = plataforma;
        this.preco = preco;
    }
    
    exibirDetalhes(): void {
        console.log(`Detalhes do Jogo:
        Nome: ${this.nome}
        Gênero: ${this.genero}
        Jogadores: ${this.numeroJogadores}
        Plataformas: ${this.plataforma}
        Preço: $${this.preco}`);
    }

    aplicarDesconto():number {
        let desconto = this.preco * 10 / 100;
        let total = this.preco - desconto;
        return total;
    }

    addPlataforma(novaPlataforma): [string] {
        this.plataforma.push(novaPlataforma);
        return this.plataforma
    }
      

    estimarTempoJogo():string {
        if(this.genero === "ação") {
            return "Cerca de 12 horas para ser concluído!";
        }
    }
    
}

const game = new VideoGame('Scream', 'Ação', 6, ['PlayStation'], 80.00);
const resultado = game.aplicarDesconto();
console.log(resultado)
game.addPlataforma('PlayStation');
const tempoEstimado = game.estimarTempoJogo();
console.log(tempoEstimado);