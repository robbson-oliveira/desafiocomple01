/* Desafio Complementar
Aqui está a transcrição do desafio da imagem:

---

**Criar um algoritmo JS simples**

### Descrição:
- ✅ Crie um script em JS que solicite ao usuário que insira no mínimo um dado do tipo texto e outro do tipo numérico.
- ✅ Em seguida, com JavaScript, realize operações matemáticas ou de concatenação sobre as entradas, considerando o tipo de dado.
- ✅ Ao finalizar, mostre os resultados por meio de `alert()` ou `console.log()`.

### Exemplo:
- ✅ Solicitar o nome pelo prompt e mostrá-lo em console junto a algum texto de saudação. Exemplo: Olá, João!
- ✅ Solicitar um número pelo prompt, parseá-lo, somá-lo a outro que esteja armazenado em uma variável e, por fim, mostrar o resultado por console.
- ✅ Solicitar um texto pelo prompt, depois outro, concatená-los e mostrar o resultado através de alert.

### Formato:
- ✅ Link do código no GitHub e da publicação no GitHub Pages.

---*/

var name = prompt("Qual o seu nome?");
console.log("Olá, " + name + "!");

var produtotoCart = 3;
var cartTotal = parseFloat(prompt("Quantos produtos você quer adicionar ao carrinho?"));
console.log("Produtos previstos no seu carrinho: " + (produtotoCart + cartTotal))

var bairro = prompt("Qual o seu bairro?");
var cidade = prompt("Qual a cidade");
alert("Seu bairro: " + bairro + " Sua cidade é: " + cidade)
