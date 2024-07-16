// Dada uma string, você deve retornar uma string na qual cada caractere (diferenciando maiúsculas de minúsculas) seja repetido uma vez.

// Exemplos (Entrada -> Saída):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Boa sorte!

// vamos resovler esse problema atraves de funções usando 3 funções simples no JS
// 1º Vamos separar os caracteres da string usando o split();
// 2º Vamos duplicar os carateres usando o map();
// 3º Vamos juntar todos os caracteres usando o join();
// Isso tudo será armazenado em um array;
// Juntando todos os métodos em uma linha temos o seguinte resultado:

function doubleChar(str) {
    
    const double_char = str.split('').map((x)=>x+x).join('');
    
    return console.log(double_char);
}