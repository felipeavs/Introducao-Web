# Box Model

- Fundamental para fazer layouts para a web
- Maior Facilidade para aplicar o CSS

### O que é?

Uma caixa retangular
Essa caixa possui propriedades de uma caixa 2D

- Tamanho (largura/altura)      width | height
- Conteúdo                      content
- Bordas                        border
- Preenchimento interno         padding
- Espaço fora da caixa          margin

## Box-sizing

```CSS
div {
    width: 100px;
    height: 100px;
    border: 1px solid red;
    margin: 10%;
    padding: 0 20px;

    box-sizing: border-box; /*Isso faz com que a div tenha exatamente 100px de largura ou altura, restringindo o que o padding iria adicionar ao calculo Fazendo os calculos a partir da borda*/
}
```

## display: block vs display: inline

- Como as caixas se comportam em relação as outras caixas
- Comportamento externo das caixas

|---------------------------------|---------------------------------|
| **Block**                       | **inline**                      |
| Ocupa tora a linha, colocando o | Elemento ao lado do outro       |
| próximo elemento abaixo desse   |                                 |
|---------------------------------|---------------------------------|
| Width e height são respeitados  | Width e height não funcionam    |
|---------------------------------|---------------------------------|
| Padding, margin, border irão    | Somente valores horizontais de  |
| funcionar normalmente           | margin, padding e border        |
|---------------------------------|---------------------------------|

Exemplos:
- block: `<p> <div> <section>`, todos os headings `<h1> <h2>...`
- inline: `<a> <span> <strong> <em>` 

