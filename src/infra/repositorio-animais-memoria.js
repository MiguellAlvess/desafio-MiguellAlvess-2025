import { Animal } from "../domain/animal.js";

class RepositorioAnimaisEmMemoria {
  constructor() {
    this.mapa = new Map();
    this.registrar(new Animal("Rex", "cão", ["RATO", "BOLA"]));
    this.registrar(new Animal("Mimi", "gato", ["BOLA", "LASER"]));
    this.registrar(new Animal("Fofo", "gato", ["BOLA", "RATO", "LASER"]));
    this.registrar(new Animal("Zero", "gato", ["RATO", "BOLA"]));
    this.registrar(new Animal("Bola", "cão", ["CAIXA", "NOVELO"]));
    this.registrar(new Animal("Bebe", "cão", ["LASER", "RATO", "BOLA"]));
    this.registrar(new Animal("Loco", "jabuti", ["SKATE", "RATO"]));
  }

  gerarChave(nome) {
    return String(nome || "")
      .trim()
      .toUpperCase();
  }

  registrar(animal) {
    this.mapa.set(this.gerarChave(animal.nome), animal);
  }

  obterPorNome(nomeInformado) {
    const encontrado = this.mapa.get(this.gerarChave(nomeInformado));
    if (encontrado) return encontrado;
    return null;
  }

  nomesValidos() {
    const nomes = [];
    for (const a of this.mapa.values()) nomes.push(a.nome);
    return nomes;
  }
}

export { RepositorioAnimaisEmMemoria };
