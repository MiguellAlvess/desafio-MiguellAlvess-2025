import { Animal } from "../domain/animal.js";
import { RepositorioAnimaisEmMemoria } from "./repositorio-animais-memoria.js";

describe("RepositorioAnimaisEmMemoria", () => {
  test("Deve registrar novo animal e permitir sua recuperação", () => {
    const repositorio = new RepositorioAnimaisEmMemoria();
    const novoAnimal = new Animal("Toby", "cão", ["OSSO", "BOLA"]);
    repositorio.registrar(novoAnimal);
    const animalRecuperado = repositorio.obterPorNome("TOBY");
    expect(animalRecuperado).not.toBeNull();
    expect(animalRecuperado.nome).toBe("Toby");
    expect(animalRecuperado.especie).toBe("cão");
    expect(animalRecuperado.brinquedosFavoritos).toEqual(["OSSO", "BOLA"]);
  });
});
