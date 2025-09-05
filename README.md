# START DB — Desafio Técnico • Abrigo de Animais

Projeto desenvolvido para o desafio técnico do Programa Estágio START DB.

Tem como intuito organizar a adoção de animais com base nas preferências de brinquedos de cada animal e nas listas de brinquedos de duas pessoas candidatas, definindo de forma clara quem adota cada animal ou se ele permanece no abrigo.

## Instalação e execução

```bash
# instalar dependências
npm install

# rodar testes
npm test
```

## Regras de negócio

- O animal vai para a pessoa que mostra todos os seus brinquedos favoritos na ordem desejada (itens podem ser intercalados).

- Gatos não dividem seus brinquedos: após adotar um gato, os brinquedos favoritos dele ficam “reservados” para outros gatos dessa mesma pessoa; isso impede que outros animais (não-gatos) usem esses brinquedos para “provar afinidade”.

- Empate: se ambas as pessoas tiverem condições para o mesmo animal, ele fica no abrigo.

- Limite: uma pessoa não pode adotar mais de 3 animais.

- **Exceção do Loco (jabuti)**:

  - Não exige ordem dos favoritos (basta conter todos).

  - Só pode ser adotado por quem já tenha outro animal (precisa de companhia).

- **Validações**:

  - Animal inválido ou duplicado → { erro: 'Animal inválido' }

  - Brinquedo inválido ou duplicado → { erro: 'Brinquedo inválido' }

## Animais cadastrados:

- Rex (cão): RATO, BOLA
- Mimi (gato): BOLA, LASER
- Fofo (gato): BOLA, RATO, LASER
- Zero (gato): RATO, BOLA
- Bola (cão): CAIXA, NOVELO
- Bebe (cão): LASER, RATO, BOLA
- Loco (jabuti): SKATE, RATO

**Catálogo de brinquedos válidos**: RATO, BOLA, LASER, CAIXA, NOVELO, SKATE.

## Formato de entrada/saída

**Entrada**

Três strings:

**1.** Brinquedos da pessoa 1 (separados por vírgula)

**2.** Brinquedos da pessoa 2 (separados por vírgula)

**3.** Ordem de animais a considerar (nomes separados por vírgula)

Exemplo de chamada:

```bash
new AbrigoAnimais().encontraPessoas(
  'RATO,BOLA',
  'RATO,NOVELO',
  'Rex,Fofo'
);
```

**Saída**

Objeto com:

- Lista: array ordenado alfabeticamente pelo nome do animal com strings no formato "Nome - Destino"

Em caso de erro:

- Erro: string com a mensagem de erro

## Exemplos

** Caso válido **

Entrada:

```bash
'RATO,BOLA', 'RATO,NOVELO', 'Rex,Fofo'
```

Saída:

```bash
{ lista: ['Fofo - abrigo', 'Rex - pessoa 1'] }
```

**Caso inválido (animal inexistente)**

Entrada:

```bash
'CAIXA,RATO', 'RATO,BOLA', 'Lulu'
```

Saída:

```bash
{ erro: 'Animal inválido' }
```

## Metodologia e testes automatizados

- Aplicada a metodologia **TDD (Test-Driven Development)**.

- **93%** de cobertura de testes utilizando Jest.
