import { RepositorioAnimaisEmMemoria } from "./infra/repositorio-animais-memoria.js";
import { PoliticaAdocao } from "./domain/politica-de-adocao.js";
import { ErroAnimalInvalido } from "./application/errors/erro-animal-invalido.js";
import { ErroBrinquedoInvalido } from "./application/errors/erro-brinquedo-invalido.js";
import { Pessoa } from "./domain/pessoa.js";
import { ValidadorEntradas } from "./application/validador-entrada.js";

class AbrigoAnimais {
  constructor() {
    this.repositorio = new RepositorioAnimaisEmMemoria();
    this.validador = new ValidadorEntradas(this.repositorio);
    this.politica = new PoliticaAdocao();
  }

  encontraPessoas(
    textoBrinquedosPessoa1,
    textoBrinquedosPessoa2,
    textoOrdemAnimais
  ) {
    try {
      const brinquedosPessoa1 = this.extrairBrinquedos(textoBrinquedosPessoa1);
      const brinquedosPessoa2 = this.extrairBrinquedos(textoBrinquedosPessoa2);
      const nomesAnimaisNaOrdem = this.extrairAnimais(textoOrdemAnimais);

      this.validador.validarBrinquedos(brinquedosPessoa1);
      this.validador.validarBrinquedos(brinquedosPessoa2);
      this.validador.validarAnimais(nomesAnimaisNaOrdem);

      const pessoa1 = new Pessoa(1, brinquedosPessoa1);
      const pessoa2 = new Pessoa(2, brinquedosPessoa2);

      const atribuicoes = new Map();
      for (const nomeInformado of nomesAnimaisNaOrdem) {
        const animal = this.repositorio.obterPorNome(nomeInformado);
        const destino = this.politica.destinoPara(animal, pessoa1, pessoa2);

        if (destino === "pessoa 1") {
          pessoa1.adotar(animal);
          atribuicoes.set(animal.nome, "pessoa 1");
          continue;
        }

        if (destino === "pessoa 2") {
          pessoa2.adotar(animal);
          atribuicoes.set(animal.nome, "pessoa 2");
          continue;
        }

        atribuicoes.set(animal.nome, "abrigo");
      }

      const nomes = [];
      for (const nome of atribuicoes.keys()) nomes.push(nome);
      nomes.sort((a, b) => a.localeCompare(b));

      const listaFormatada = [];
      for (const nome of nomes) {
        const destino = atribuicoes.get(nome);
        listaFormatada.push(nome + " - " + destino);
      }

      return { lista: listaFormatada };
    } catch (erro) {
      if (erro instanceof ErroAnimalInvalido)
        return { erro: "Animal inválido" };
      if (erro instanceof ErroBrinquedoInvalido)
        return { erro: "Brinquedo inválido" };
      return { erro: "Brinquedo inválido" };
    }
  }

  extrairBrinquedos(texto) {
    const brinquedosNormalizados = [];
    const textoEntrada = String(texto || "");
    const itensSeparados = textoEntrada.split(",");
    for (let i = 0; i < itensSeparados.length; i++) {
      const itemBrinquedo = itensSeparados[i].trim();
      if (itemBrinquedo.length > 0)
        brinquedosNormalizados.push(itemBrinquedo.toUpperCase());
    }
    return brinquedosNormalizados;
  }

  extrairAnimais(texto) {
    const nomesNormalizados = [];
    const textoEntrada = String(texto || "");
    const itensSeparados = textoEntrada.split(",");
    for (let i = 0; i < itensSeparados.length; i++) {
      const nomeAnimal = itensSeparados[i].trim();
      if (nomeAnimal.length > 0) nomesNormalizados.push(nomeAnimal);
    }
    return nomesNormalizados;
  }
}

export { AbrigoAnimais as AbrigoAnimais };
