import { Pessoa } from "./pessoa.js";
import { Animal } from "./animal.js";

describe("Pessoa", () => {
  test("Deve retornar true quando algum dos brinquedos necessários está reservado por gatos", () => {
    const pessoa = new Pessoa(1, ["BOLA", "RATO", "LASER"]);
    const gato = new Animal("Mimi", "gato", ["BOLA", "LASER"]);
    pessoa.adotar(gato);
    expect(pessoa.conflitoComBrinquedosDeGatos(["BOLA"])).toBe(true);
  });
  test("Retorna false quando nenhum dos brinquedos necessários está reservado por gatos", () => {
    const pessoa = new Pessoa(1, ["BOLA", "RATO", "LASER"]);
    const gato = new Animal("Mimi", "gato", ["BOLA", "LASER"]);
    pessoa.adotar(gato);
    expect(pessoa.conflitoComBrinquedosDeGatos(["RATO"])).toBe(false);
  });
});
