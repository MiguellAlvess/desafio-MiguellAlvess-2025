import { ErroAnimalInvalido } from "./errors/erro-animal-invalido.js";
import { ErroBrinquedoInvalido } from "./errors/erro-brinquedo-invalido.js";

class ValidadorEntradas {
  constructor(repositorioAnimais) {
    this.repositorioAnimais = repositorioAnimais;
    this.brinquedosValidos = new Set([
      "RATO",
      "BOLA",
      "LASER",
      "CAIXA",
      "NOVELO",
      "SKATE",
    ]);
  }

  validarBrinquedos(lista) {
    const vistos = new Set();
    for (let i = 0; i < lista.length; i++) {
      const item = lista[i];
      if (!this.brinquedosValidos.has(item))
        return this.dispararBrinquedoInvalido();
      if (vistos.has(item)) return this.dispararBrinquedoInvalido();
      vistos.add(item);
    }
  }

  validarAnimais(nomes) {
    const vistos = new Set();
    for (let i = 0; i < nomes.length; i++) {
      const nome = nomes[i];
      const existente = this.repositorioAnimais.obterPorNome(nome);
      if (!existente) throw new ErroAnimalInvalido();
      const chave = nome.trim().toUpperCase();
      if (vistos.has(chave)) throw new ErroAnimalInvalido();
      vistos.add(chave);
    }
  }

  dispararBrinquedoInvalido() {
    throw new ErroBrinquedoInvalido();
  }
}

export { ValidadorEntradas, ErroAnimalInvalido, ErroBrinquedoInvalido };
