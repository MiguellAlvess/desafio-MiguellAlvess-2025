import { Animal } from "./animal.js";

describe("Animal", () => {
  test("Deve retornar true quando os brinquedos favoritos aparecem na ordem correta intercalados com outros itens", () => {
    const animal = new Animal("Rex", "cão", ["RATO", "BOLA"]);
    expect(
      animal.mostraTodosFavoritosNaOrdem(["LASER", "RATO", "CAIXA", "BOLA"])
    ).toBe(true);
  });
});
