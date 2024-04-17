//Lista Ricardo Miyamoto 2348144

//1. Escreva uma função que calcule e retorne o fatorial de um número.

function fatorial(valor){
    var fat = valor-1
    var soma = valor
    while(fat != 0){
        soma = soma*fat
        fat = fat-1
    }
    console.log("O fatorial é de "+valor+" é de: "+soma)
}
fatorial(9)

/*2. Escreva uma função que retorne uma String contendo uma sequência de
N mensagens do texto informado pelo usuário. O valor de N e a mensagem são
informados por parâmetro.*/

function sequenciaString(N, mensagem){
    let sequencia = ""
    for (let i = 0; i < N; i++) {        
        sequencia = sequencia.concat(mensagem);
    }
    return("String em sequencia: "+sequencia)
}

console.log(sequenciaString(5,"Você é legal!"))

/*3. Escreva uma função que receba 2 valores e uma operação básica: adição, subtração,
multiplicação e divisão e retorne o resultado da operação.
Observação: Faça a validação para prevenir a divisão por 0 e também para garantir que
a operação informada é válida. Retorne nulo para os casos de erro.*/

function calcula(V1, V2, operacao){
    switch (operacao) {
        case '+':
          return("Adição de "+V1+" + "+V2+" = "+ (V1+V2))
        case '-':
            return("Subtração de "+V1+" - "+V2+" = "+ (V1-V2))
        case '*':
            return("Multiplicação de "+V1+" x "+V2+" = "+(V1*V2))
        case '/':
            if(V2 == 0){
                return null
            }else{
                return("Divisão de "+V1+" / "+V2+" = "+(V1/V2))
            }
    }
}
console.log(calcula(2,5,"/"))

/*4. Escreva uma função que retorne um vetor contendo o resultado da tabuada de um
número recebido por parâmetro. Cada resultado na respectiva posição do índice */

function tabuada(N){
    let vetor = []
    for(let i=0; i<=10; i++){
        vetor.push(N*i)
    }
    return(vetor)
}
console.log("Tabuada: "+tabuada(9))

/*5. Escreva uma função que retorne um número fornecido pelo usuário, porém
invertido. Por exemplo, o usuário fornece o número 875 e a função retorna o número
578. O argumento da função e o retorno deve ser um valor inteiro.
 */

function invertido(N){
    let snum = N.toString()
    let num = parseInt(snum.split('').reverse().join(''))
    return(num)
}
console.log(invertido(258))

/*6. Escreva uma função que permita contar o número de vogais contidas em uma string
fornecida por parâmetro. Por exemplo, o usuário informa a string “Brocolis”, e a função
retorna o número 3 (há 3 vogais nessa palavra).
 */

function vogais(str){
    let vogais = 0
    for(let i=0; i<str.length; i++){
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i == 'o'|| str[i]=='u']){
            vogais++
        }
    }
    return(vogais)
}
console.log(vogais("abelhas"))

/*7. Escreva uma função que receba uma sequência de parênteses e colchetes e retorne se
a sequência está bem formada ou não. O retorno deve ser um valor lógico. Exemplo:
“(([]))” retorna true, “(([)])” retorna falso.
 */

function bemFormada(s) {
    const pilha = [];
    const abertos = '([{';
    const fechamentos = ')]}';
    const pares = {
      '(': ')',
      '[': ']',
      '{': '}'
    };
  
    for (let i = 0; s[i] !== '\0'; ++i) {
      const char = s[i];
  
      if (abertos.includes(char)) {
        pilha.push(char);
      } else if (fechamentos.includes(char)) {
        const topo = pilha[pilha.length - 1];
        if (pares[topo] === char) {
          pilha.pop();
        } else {
          return false;
        }
      }
    }
  
    return pilha.length === 0;
  }
  console.log(bemFormada(")("))

  /*8. Escreva uma função que receba um número e retorne uma lista de objetos (id, nome e
idade) aleatórios gerados dinamicamente. O código deve ser sequencial; use uma lista
de nomes pré-definida; e gere idades entre 18 e 90 anos.
 */

function listaObjetos(n){
    let nomes = ["João", "Caio", "Ricardo", "Anna Laura", "Mary"]
    let lista = []

    for(let i=0; i<n; i++){
        lista.push(Math.floor(Math.random()*100)+1)
        lista.push(nomes[Math.floor(Math.random()*4)])
        lista.push(Math.floor(Math.random()*(90 - 18 + 1))+18)
    }

    return(lista)
}
console.log(listaObjetos(2))

/*9. Escreva uma função que receba a lista de objetos gerados anteriormente e calcule a
média de idades das pessoas presentes na lista. */

function mediaIdades(pessoas) {
    if (pessoas.length === 0) {
      return 0;
    }
  
    let somaIdades = 0;
    let contador = 0;
  
    for (const pessoa of pessoas) {
      if (typeof pessoa.idade === 'number') {
        somaIdades += pessoa.idade;
        contador++;
      }
    }
  
    if (contador === 0) {
      return 0;
    }
  
    return somaIdades / contador;
  }

  const pessoas = [
    { nome: 'João', idade: 20 },
    { nome: 'Maria', idade: 30 },
    { nome: 'Pedro', idade: 40 },
    { nome: 'Ana', idade: 90 },
    { nome: 'Carlos', idade: 50 },
    { nome: 'Fernanda', idade: 45 },
  ]
  console.log(mediaIdades(pessoas))

  /*10. Escreva uma função que receba a lista de objetos gerados anteriormente e ordene os
dados por um dos atributos informados por parâmetros. */

function ordenarPorAtributo(lista, atributo) {
    if (lista.length === 0 || typeof atributo !== 'string') {
      return [];
    }
  
    return lista.sort((a, b) => {
      if (a[atributo] < b[atributo]) {
        return -1;
      }
      if (a[atributo] > b[atributo]) {
        return 1;
      }
      return 0;
    });
  }

  const lista = [
    { nome: 'João', idade: 20 },
    { nome: 'Maria', idade: 30 },
    { nome: 'Pedro', idade: 40 },
    { nome: 'Ana', idade: 90 },
    { nome: 'Carlos', idade: 50 },
    { nome: 'Fernanda', idade: 45 },
  ]
  
  console.log(ordenarPorAtributo(pessoas, 'idade'))