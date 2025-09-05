import { PoliticaAdocao } from "./politica-adocao.js";
import { Pessoa } from "./pessoa.js";
import { Animal } from "./animal.js";

describe("PoliticaAdocao", () => {
  test("Deve enviar para o abrigo quando há empate entre duas pessoas aptas", () => {
    const politica = new PoliticaAdocao();
    const animal = new Animal("Rex", "cão", ["RATO", "BOLA"]);
    const pessoa1 = new Pessoa(1, ["RATO", "BOLA"]);
    const pessoa2 = new Pessoa(2, ["RATO", "BOLA"]);
    expect(politica.destinoPara(animal, pessoa1, pessoa2)).toBe("abrigo");
  });
});
