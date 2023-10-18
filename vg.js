var VideoGame = /** @class */ (function () {
    function VideoGame(nome, genero, numeroJogadores, plataforma, preco) {
        this.nome = nome;
        this.genero = genero;
        this.numeroJogadores = numeroJogadores;
        this.plataforma = plataforma;
        this.preco = preco;
    }
    VideoGame.prototype.exibirDetalhes = function () {
        console.log("Detalhes do Jogo:\n        Nome: ".concat(this.nome, "\n        G\u00EAnero: ").concat(this.genero, "\n        Jogadores: ").concat(this.numeroJogadores, "\n        Plataformas: ").concat(this.plataforma, "\n        Pre\u00E7o: $").concat(this.preco));
    };
    VideoGame.prototype.aplicarDesconto = function () {
        var desconto = this.preco * 10 / 100;
        var total = this.preco - desconto;
        return total;
    };
    VideoGame.prototype.addPlataforma = function (novaPlataforma) {
        this.plataforma.push(novaPlataforma);
        return this.plataforma;
    };
    VideoGame.prototype.estimarTempoJogo = function () {
        if (this.genero === "ação") {
            return "Cerca de 12 horas para ser concluído!";
        }
    };
    return VideoGame;
}());
var game = new VideoGame('Scream', 'Ação', 6, ['PlayStation'], 80.00);
var resultado = game.aplicarDesconto();
console.log(resultado);
game.addPlataforma('PlayStation');
var tempoEstimado = game.estimarTempoJogo();
console.log(tempoEstimado);
